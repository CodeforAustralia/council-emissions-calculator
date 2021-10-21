const Sheets = require('@googleapis/sheets');

const trips = async (req, res) => {
  console.log(`[INFO] request api: trips`);
  console.log(`[INFO] request hostname: ${req.hostname}`);

  switch (req.method) {
    case 'GET':
      console.log(`[INFO] ${req.method} request successful.`);
      let triptotals = await getTripTotalsTop3();
      res.status(200).send(triptotals);
      break;
    case 'OPTIONS':
      // Set CORS headers for preflight requests
      // Allows GETs from any origin with the Content-Type header
      // and caches preflight response for 3600s
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.setHeader('Access-Control-Max-Age', '3600');
      console.log(`[INFO] ${req.method} request successful.`);
      res.status(204).send('');
      break;
    default:
      console.log(`[INFO] Method not allowed: ${req.method}`);
      res.status(405).send('');
  }
}

const setupSheetsClient = async () => {
  const keysEnvVar = process.env['GCP_APP_CREDS'];

  if (!keysEnvVar) {
    throw new Error('[ERR] The $GCP_APP_CREDS environment variable was not found!');
  }
  const keys = JSON.parse(keysEnvVar);

  const auth = new Sheets.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  const authClient = auth.fromJSON(keys);

  const sheets = await Sheets.sheets({
    version: 'v4',
    auth: authClient
  });

  return sheets;
}

const getSheetsData = async (params) => {
  const sheets_client = await setupSheetsClient();

  const data = await sheets_client.spreadsheets.values.get(params);
  return data;
}

// getTripTotals() example output:
// [
//   [
//     "E-bike",
//     "36"
//   ],
//   [
//     "Bicycle",
//     "30"
//   ],
//   [
//     "Car(driver)",
//     "27"
//   ]
// ]
export const getTripTotalsTop3 = async () => {
  let params = {
    spreadsheetId: process.env['TRIPS_SHEETID'],
    range: process.env['TRIPS_CELLRANGE'],
  };

  const tripTotals = await (await getSheetsData(params)).data.values;
  return tripTotals;
}

export default trips;
