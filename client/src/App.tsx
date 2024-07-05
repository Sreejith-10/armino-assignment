import {gql, useQuery} from "@apollo/client";
import WeatherChart from "./components/weather-chart";
import WeatherMenu from "./components/weather-menu";

const GET_WEATHER = gql`
	query GetWeather($city: String!) {
		weather(city: $city) {
			city
			temperature
			description
		}
	}
`;

const App = () => {
	const {data, error} = useQuery(GET_WEATHER, {
		variables: {city: "Delhi"},
	});

	console.log(error);
	console.log(data);

	return (
		<div className="w-full h-dvh">
			<div className="w-full h-full px-20 py-32 flex sm:flex-col gap-10">
				<div className="w-[40%] h-full">
					<WeatherMenu />
				</div>
				<div className="w-[60%] h-full space-y-5">
					<WeatherChart />
					<div className="w-[80%] space-y-3 px-5">
						<h1 className="font-semibold text-xl text-slate-50">
							Lorem ipsum dolor sit amet.
						</h1>
						<p className="font-normal text-slate-50">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
							expedita beatae corrupti, rerum quisquam doloremque earum eveniet
							in nam voluptates. Quo assumenda necessitatibus cumque porro
							debitis illum at, sit deleniti facilis illo aliquam exercitationem
							perferendis sunt, facere enim minima quisquam asperiores atque
							consectetur nam velit. A molestiae maxime accusamus quidem soluta
							temporibus doloribus, possimus voluptate alias velit accusantium
							repellendus quaerat ratione dolore sed repudiandae sapiente eum
							ducimus nulla quisquam. Unde, fugit! Itaque, impedit! Porro
							mollitia perspiciatis labore explicabo quisquam nihil aliquid
							beatae deserunt commodi sunt sed tempora quis praesentium incidunt
							soluta totam fugit, assumenda fugiat! Doloremque maxime animi unde
							officiis?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
