import express from "express";
import {graphqlHTTP} from "express-graphql";
import {schema} from "./schema/schema.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
	"/graphql",
	graphqlHTTP({
		schema: schema,
		graphiql: true,
	})
);

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
