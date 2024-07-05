import axios from "axios";

export const fetchWeather = async (city) => {
	try {
		const response = await axios.get(
			`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.APIKEY}&units=metric`
		);
		return response;
	} catch (error) {
		console.log(error);
	}
};
