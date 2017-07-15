/* eslint-disable linebreak-style */

import { MongoClient } from "mongodb"

const MONGO_URL	= "mongodb://mlab.com:61012/isgraph"

module.exports = async () => {
	const db = await MongoClient.connect(MONGO_URL)
	return { Links: db.collection("links") }
}