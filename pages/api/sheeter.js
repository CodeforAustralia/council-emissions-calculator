const Sheets = require('@googleapis/sheets');

const sheeter = async (req, res) => {
  // Set CORS headers for preflight requests
  // Allows GETs from any origin with the Content-Type header
  // and caches preflight response for 3600s
  res.setHeader('Access-Control-Allow-Origin', '*');

  console.log(`[INFO] request hostname: ${req.hostname}`);

  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Max-Age', '3600');
    res.status(204).send('');
  }

  else {
    const keysEnvVar = process.env['GCP_APP_CREDS'];

    if (!keysEnvVar) {
      throw new Error('[ERR] The $GCP_APP_CREDS environment variable was not found!');
    }
    const keys = JSON.parse(keysEnvVar);

    const auth = new Sheets.auth.GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    // const authClient = await auth.getClient();
    const authClient = auth.fromJSON(keys);

    // const sheets = Sheets({version: 'v4', auth: authClient});
    const sheets = await Sheets.sheets({
      version: 'v4',
      auth: authClient
    });

    let shres = null;

    if (req.method === 'GET') {
      console.log('[INFO]: getting form responses from sheets ===')
      shres = await getFormData(sheets);
    }
    else {
      console.log('[INFO]: sending form response to sheets ===')
      shres = await sendFormResponse(sheets,req);
    }

    // console.log(req.body);
    console.log(`[INFO] response from sheets: ${JSON.stringify(shres, null, '  ')}`);

    res.send(shres.data);
  }
}

const getFormData = async (sheets_client) => {
  var params = {
    // The ID of the spreadsheet to update.
    spreadsheetId: '1d4UQSXPPOcjFtu7RkJsh6DvhRKt11xVCW8WyTC8GeqE', // personal

    // The A1 notation of a range to search for a logical table of data.
    // Values will be appended after the last row of the table.
    range: 'Form Responses 1!A13:P',
  };

  const resp = await sheets_client.spreadsheets.values.get(params);
  return resp;
}

const sendFormResponse = async (sheets_client, form_data) => {
  var params = {
    // The ID of the spreadsheet to update.
    spreadsheetId: '1d4UQSXPPOcjFtu7RkJsh6DvhRKt11xVCW8WyTC8GeqE', // personal

    // The A1 notation of a range to search for a logical table of data.
    // Values will be appended after the last row of the table.
    range: 'Form Responses 1!A13:P',

    // How the input data should be interpreted.
    valueInputOption: 'RAW',

    // How the input data should be inserted.
    insertDataOption: 'INSERT_ROWS',

    requestBody: {
      values: [
        convertFormResponseToList(form_data.body)
      ],
    },
  };

  const resp = await sheets_client.spreadsheets.values.append(params);
  return resp;
}

const convertFormResponseToList = (formResp) => {
  // Example form response:
  // {
  //   "km": "12",
  //   "week": ["office", "home", "home", "office", "office", "didNotWork", "didNotWork"],
  //   "transportModes": ["bike", "didNotTravel", "didNotTravel", "bus", "bus", "didNotTravel", "didNotTravel"],
  //   "incentive": "I'd like to have better biking lanes.",
  //   "department": "Education",
  // };
  let xs = [];

  for (const [unused,v] of Object.entries(formResp)) {
    // if v is a list, concatenate on to xs
    if (Array.isArray(v)) { xs = xs.concat(v); }
    else { xs.push(v); }
  }

  console.log(`transformed response: ${xs}`)
  return xs;
}

export default sheeter;
