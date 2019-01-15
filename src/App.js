import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/Header/Header";
import Home from "./components/HomePage/HomePage";
import Info from "./components/InfoPage/InfoPage";
import HightLight from "./components/HightLight/HightLight";
import Pricing from "./components/Price/Pricing";
import Location from "./components/location";
import Footer from "./components/Header/Footer";
import { Element } from "react-scroll";

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Element name="Home">
					<Home />
				</Element>
				<Element name="Info">
					<Info />
				</Element>
				<Element name="HightLight">
					<HightLight />
				</Element>
				<Element name="Pricing">
					<Pricing />
				</Element>
				<Element name="Location">
					<Location />
				</Element>

				<Footer />
			</div>
		);
	}
}

export default App;
