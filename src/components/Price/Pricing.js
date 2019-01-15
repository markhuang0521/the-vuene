import React, { Component } from "react";
import MyButton from "../shared/MyButton";
import Flip from "react-reveal/Flip";

export default class Price extends Component {
	state = {
		prices: [100, 200, 300],
		positions: ["Balcony", "Medium", "Star"],
		desc: [
			"most afforable option for a unforgetable expereince",
			" The standard Price for the best value",
			"it would be time to live like a STAR"
		],
		links: [
			"https://www.google.com/",
			"https://www.google.com/",
			"https://www.google.com/"
		],
		delays: [500, 0, 1000]
	};
	showPrices = () =>
		this.state.prices.map((item, i) => (
			<Flip top delay={this.state.delays[i]} key={i}>
				<div className="pricing_item">
					<div className="pricing_inner_wrapper">
						<div className="pricing_title">
							<span>${this.state.prices[i]}</span>
							<span>{this.state.positions[i]}</span>
						</div>
						<div className="pricing_description">
							<span>{this.state.desc[i]}</span>
						</div>
						<div className="pricing_buttons">
							<MyButton
								link={this.state.links[i]}
								text="Purchase Ticket"
								bck="#ff9100"
								color="white"
							/>
						</div>
					</div>
				</div>
			</Flip>
		));

	render() {
		return (
			<div>
				<div className="bck_black">
					<div className="center_wrapper pricing_section">
						<h2 className="">Pricing</h2>
						<div className="pricing_wrapper"> {this.showPrices()}</div>
					</div>
				</div>
			</div>
		);
	}
}
