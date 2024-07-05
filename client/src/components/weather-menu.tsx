const WeatherMenu = () => {
	return (
		<div className="w-full h-full bg-orange-200 rounded-3xl flex flex-col gap-5 p-10 items-center justify-evenly text-orange-600">
			<div>
				<h1 className="font-bold text-[30px]">Today</h1>
			</div>
			<div className="flex gap-5 items-center">
				<div>
					<img
						src="/public/sun.png"
						alt="icon"
						className="size-40 text-orange-400"
					/>
				</div>
				<h1 className="font-semibold text-[100px]">32 &deg;</h1>
			</div>
			<h1 className="font-semibold text-2xl">Sunny</h1>
			<h1 className="font-semibold text-2xl">New Delhi</h1>
			<h2 className="font-semibold text-2xl">5 July 2024</h2>
			<h2 className="font-semibold text-2xl">Feels like 30 | Sunset 18:20</h2>
		</div>
	);
};

export default WeatherMenu;
