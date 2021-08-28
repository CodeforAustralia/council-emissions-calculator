const url = 'http://localhost:8080';
// const url = 'https://australia-southeast1-civic-maker-x.cloudfunctions.net/submitFormResponses';

export const sendFormResponse = async (resp) => {
  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(resp),
  };
  const apiResponse = await fetch(url, params);
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
  const apiResponse = await fetch(url, params);
  const text = await apiResponse.text();
  console.log(`getFormResponses : (status: ${apiResponse.status}) ${JSON.stringify(text, null, '\t')}`);
  return text;
};
