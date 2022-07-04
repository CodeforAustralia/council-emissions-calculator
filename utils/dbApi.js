const hostname = process.env["NEXT_PUBLIC_HOST"];

export const getTripCounts = async () => {
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const apiResponse = await fetch(`${hostname}/api/trips`, params);
  const tripCounts = await apiResponse.json();
  return tripCounts;
};

export const sendFormResponse = async (resp) => {
  const datestring = new Date().toLocaleString("sv", { timeZoneName: "short" });
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ timestamp: datestring, ...resp }),
  };
  const apiResponse = await fetch(`${hostname}/api/sheeter`, params);
  const text = await apiResponse.text();
};

export const getFormResponses = async () => {
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const apiResponse = await fetch(`${hostname}/api/sheeter`, params);
  const text = await apiResponse.text();
  return text;
};
