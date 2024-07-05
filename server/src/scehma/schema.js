import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLSchema,
	GraphQLString,
} from "graphql";

const data = [
	{name: "srejiht", id: "12"},
	{name: "vipi", id: "13"},
	{name: "sooraj", id: "14"},
	{name: "shou", id: "15"},
	{name: "noor", id: "16"},
];

const WeatherType = new GraphQLObjectType({
	name: "Weather",
	fields: () => ({}),
});

const RootQuery = new GraphQLObjectType({
	name: "RootQuery",
	fields: {
		Weather: {
			type: WeatherType,
			//id
			args: {},
			resolve(parent, args) {
				//return data from db
				return data;
			},
		},
	},
});

export const schema = new GraphQLSchema({
	query: RootQuery,
});
