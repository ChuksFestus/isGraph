/* eslint-disable linebreak-style */
/* eslint-disable no-console */

import express from "express"
import bodyParser from "body-parser"
import { graphqlExpress, graphiqlExpress } from "graphql-server-express"

import schema from "./schema"
import connectMongo from "./mongo-conector"
 
const start = async () => {
	const mongo = await connectMongo()
	let app = express()

	app.use("/graphql", bodyParser.json(), graphqlExpress({
		context: {mongo},
		schema
	}))

	app.use("/graphiql", graphiqlExpress({
		endpointURL: "/graphql"
	}))

	app.listen(3000, () => console.log("server is running on port 3000"))
}

start()