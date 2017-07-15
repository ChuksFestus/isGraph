/* eslint-disable linebreak-style */

const links = [
	{
		id: 1,
		url: "http://graphql.org",
		description: "The best query language"
	},
	{
		id: 2,
		url: "http://dev.apollodata.com",
		description: "The best query client"
	}
]

module.exports = {
	Query: {
		allLinks: () => links,
	},
	Mutation: {
		createLink: (_, data) => {
			const newLink =  Object.assign({id: links.length}, data)
			links.push(newLink)
			return newLink
		}
	}
}