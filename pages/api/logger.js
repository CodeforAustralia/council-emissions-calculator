import pino from 'pino'
import { createWriteStream } from 'pino-logflare'

// create pino-logflare console stream for serverless functions and browser logs

const logflareConfig = {
    apiKey: process.env.LOGFLARE_API_KEY,
    sourceToken: process.env.LOGFLARE_SOURCE_TOKEN
};

// create pino-logflare stream
const stream = createWriteStream(logflareConfig);

// create pino logger
export const pinologger = pino({
    level: "debug",
    base: {
        env: process.env.NODE_ENV,
        revision: process.env.VERCEL_GITHUB_COMMIT_SHA,
    },
}, stream);

const logger = async (req, res) => {
  console.log(`[INFO] request api: logger`);
  console.log(`[INFO] request headers: ${JSON.stringify(req.headers)}`);

  const data = {
    request: {
      method: req.method,
      url: req.url
    },
    response: {
      status: res.statusCode
    }
  }

  switch (req.method) {
    case 'POST':
      console.log(`[INFO] ${req.method} sending logs...`);
      pinologger.info(data, JSON.stringify(req.body));
      res.status(200).send(req.body);
      break;
    default:
      console.log(`[INFO] Method not allowed: ${req.method}`);
      res.status(405).send('');
  }
}

export default logger