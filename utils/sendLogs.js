const hostname = process.env["NEXT_PUBLIC_HOST"];

export const sendLogs = async (log) => {
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(log),
  };
  await fetch(`${hostname}/api/logger`, params);
};
