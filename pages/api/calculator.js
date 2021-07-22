import Cors from "cors";

// Handle middleware
const initMiddleware = (middleware) => (req, res) =>
  new Promise((resolve, reject) => {
    middleware(req, res, (result) =>
      result instanceof Error ? reject(result) : resolve(result)
    );
  });

// Initialize the cors middleware
const cors = initMiddleware(Cors({ methods: ["GET", "POST"] }));

export default function handler(req, res) {
  await cors(req, res);

  const { query, method } = req;

  switch (method) {
    case "GET":
      // Handler for getting calculated results
      res.status(200).json(query);
      break;
    case "POST":
      // Handler for posting answers and writing them to database
      res.status(200).json(query);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
