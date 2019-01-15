import React, { Component } from "react";
// import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";

export default class CountDown extends Component {
	state = {
		deadLine: "Feb,15, 2019",
		days: "0",
		hours: "0",
		minutes: "0",
		seconds: "0"
	};

	getTimeUntil = () => {
		const time = Date.parse(this.state.deadLine) - Date.parse(new Date());
		if (time < 0) {
			console.log("time stop");
		} else {
			const seconds = Math.floor((time / 1000) % 60);
			const minutes = Math.floor((time / 1000 / 60) % 60);
			const hours = Math.floor((time / 1000 / 60 / 60) % 24);
			const days = Math.floor(time / 1000 / 60 / 60 / 24);
			// console.log(days, hours, minutes, seconds);
			this.setState({
				days,
				hours,
				minutes,
				seconds
			});
		}
	};

	componentDidMount = () => {
		console.log("app is running");

		setInterval(() => this.getTimeUntil(), 1000);
	};
	render() {
		return (
			<Bounce left cascade delay={2000}>
				<div className="countdown_wrapper">
					<div className="countdown_top">event start in</div>
					<div className="countdown_bottom ">
						<div className="countdown_item">
							<div className="countdown_time">{this.state.days}</div>
							<div className="countdown_tag"> days</div>
						</div>
						<div className="countdown_item">
							<div className="countdown_time">{this.state.hours}</div>
							<div className="countdown_tag"> hours</div>
						</div>
						<div className="countdown_item">
							<div className="countdown_time">{this.state.minutes}</div>
							<div className="countdown_tag"> mins</div>
						</div>
						<div className="countdown_item">
							<div className="countdown_time">{this.state.seconds}</div>
							<div className="countdown_tag"> secs</div>
						</div>
					</div>
				</div>
			</Bounce>
		);
	}
}
