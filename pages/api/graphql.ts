import { createServer } from "@graphql-yoga/node";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import resolvers from "../../services/graphql/resolvers";

const server = createServer<{ req: NextApiRequest; res: NextApiResponse }>({
  cors: false,
  endpoint: "/api/graphql",
  schema: {
    typeDefs: fs.readFileSync("./services/graphql/schema.gql", "utf-8"),
    resolvers,
  },
});

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export default server;
