const hostname = process.env['NEXT_PUBLIC_HOST'];

export const getTripCounts = async () => {
  const params = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const apiResponse = await fetch(`${hostname}/api/trips`, params);
  const tripCounts = await apiResponse.json();
  return tripCounts;
};

export const sendFormResponse = async (resp) => {
  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(resp),
  };
  const apiResponse = await fetch(`${hostname}/api/sheeter`, params);
  const text = await apiResponse.text();
  console.log(`sendFormResponse : (status: ${apiResponse.status}) ${JSON.stringify(text, null, '\t')}`);
};

export const getFormResponses = async () => {
  const params = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const apiResponse = await fetch(`${hostname}/api/sheeter`, params);
  const text = await apiResponse.text();
  console.log(`getFormResponses : (status: ${apiResponse.status}) ${JSON.stringify(text, null, '\t')}`);
  return text;
};
