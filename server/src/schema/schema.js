import axios from "axios";
import {
	GraphQLInt,
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLString,
} from "graphql";

const WeatherType = new GraphQLObjectType({
	name: "Weather",
	fields: {
		city: {type: GraphQLString},
		temperature: {type: GraphQLInt},
		description: {type: GraphQLString},
	},
});

const queryType = new GraphQLObjectType({
	name: "Query",
	fields: {
		weather: {
			type: WeatherType,
			args: {
				city: {type: GraphQLString},
			},
			resolve: async (parent, args) => {
				const {city} = args;
				console.log(city);
				const apiKey = process.env.APIKEY;
				const response = await axios.get(
					`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
				);
				return {
					city: response.data.name,
					temperature: Math.floor(response.data.main.temp - 273.15), // Convert Kelvin to Celsius
					description: response.data.weather[0].description,
				};
			},
		},
	},
});

export const schema = new GraphQLSchema({query: queryType});
