/* eslint-disable linebreak-style */

import { MongoClient } from "mongodb"

const MONGO_URL	= "mongodb://chuks:chuks@ds161012.mlab.com:61012/isgraph"

module.exports = async () => {
	const db = await MongoClient.connet(MONGO_URL)
	return { Links: db.collection("links") }
}