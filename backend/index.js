import express, { response } from "express";
import dbConnect from "./db.js";
import config from "./config.js";
import morgan from "morgan";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import movieresolvers from "./resolvers/resolvers.js";
import movieschema from "./schema/schema.js";

const app = express();
const port = config.PORT;

app.use(express.json());
app.use(cors());
app.use(
  morgan(
    ":remote-addr :method :url :status :res[content-length] - :response-time ms"
  )
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: movieschema,
    rootValue: movieresolvers,
    graphiql: true,
  })
);

dbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`server is listening at ${port}`);
    });
  })
  .catch((error) => {
    console.log("error connecting server", error);
  });
