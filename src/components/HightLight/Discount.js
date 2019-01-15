import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../shared/MyButton";

export default class Discount extends Component {
	state = {
		discountStart: 0,
		discountEnd: 30
	};
	changeDiscount = () => {
		if (this.state.discountStart < this.state.discountEnd) {
			this.setState(() => ({ discountStart: this.state.discountStart + 1 }));
		}
	};
	componentDidUpdate() {
		setTimeout(() => this.changeDiscount(), 30);
	}

	render() {
		return (
			<div className="center_wrapper">
				<div className="highlight_wrapper">
					<div className="discount_wrapper">
						<Fade onReveal={this.changeDiscount}>
							<div className="discount_porcentage ">
								<span>{this.state.discountStart}%</span>
								<span>OFF</span>
							</div>
						</Fade>
						<Slide right>
							<div className="discount_description">
								<h3>Purchase ticket</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
									quaerat autem doloremque harum ipsum ullam. Distinctio esse
									excepturi velit quas, explicabo beatae. Officiis delectus
									ducimus perferendis porro sed repellat laudantium!
								</p>
								<div>
									{/* <Button
										variant="contained"
										color="primary"
										// style={{ background: "#00b0ff" }}
									>
										Purchase Ticket
									</Button> */}
									<MyButton
										text="Purchase Ticket"
										bck="#00b0ff"
										color="white"
										link="https://www.google.com/"
									/>
								</div>
							</div>
						</Slide>
					</div>
				</div>
			</div>
		);
	}
}
