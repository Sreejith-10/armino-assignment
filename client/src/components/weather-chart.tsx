const WeatherChart = () => {
	return (
		<div className="w-[80%] h-80 bg-orange-300/50 rounded-3xl grid grid-cols-5 p-5">
			{Array(10)
				.fill("")
				.map((item, index) => (
					<div className="flex flex-col items-center" key={index}>
						<h2>Now</h2>
						<div>icon</div>
					</div>
				))}
		</div>
	);
};

export default WeatherChart;
