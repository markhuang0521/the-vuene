import React from "react";
import Carousel from "./Carousel";
import CountDown from "./CountDown";
const Home = () => {
	return (
		<div style={{ position: "relative" }}>
			<Carousel />
			<div className="artist_name">
				<div className="wrapper">Live Concert</div>
			</div>
			<CountDown />
		</div>
	);
};

export default Home;
