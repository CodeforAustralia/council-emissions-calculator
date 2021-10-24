import fetch from 'node-fetch';

const logger = async (req, res) => {
  // console.log(`[INFO] request api: logger`);
  // console.log(`[INFO] request headers: ${JSON.stringify(req.headers)}`);

  res.setHeader('Access-Control-Allow-Origin', '*');

  switch (req.method) {
    case 'POST':
      // console.log(`[INFO] ${req.method} sending logs...`);
      // console.log(`${JSON.stringify( {payload: req.body} )}`);
      const sendlog = await fetch(`https://api.logflare.app/logs/json?source=${process.env.LOGFLARE_SOURCE_TOKEN}`,
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': process.env.LOGFLARE_API_KEY
          },
          body: JSON.stringify( req.body )
        });
      const result = await sendlog.ok;
      const resultMsg = await sendlog.json();

      if (result) {
        res.status(200).send('');
      } else {
        res.status(500).send(resultMsg);
      }
      break;
    case 'OPTIONS':
      // Set CORS headers for preflight requests
      // Allows GETs and POSTs from any origin with the Content-Type header
      // and caches preflight response for 3600s
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

export default logger