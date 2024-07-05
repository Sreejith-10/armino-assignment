const WeatherChart = () => {
	return (
		<div className="w-[80%] h-80 bg-orange-300/50 rounded-3xl grid grid-cols-5 p-5">
			{Array(10)
				.fill("")
				.map((_, index) => (
					<div
						className="flex flex-col items-center justify-center gap-3 text-slate-50"
						key={index}>
						<h2 className="font-semibold text-lg">{index + 1} AM</h2>
						<div>
							<h2 className="font-semibold text-lg">22 &deg;</h2>
						</div>
					</div>
				))}
		</div>
	);
};

export default WeatherChart;
