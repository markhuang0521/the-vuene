import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";

const SideBar = props => {
	const scrollToElement = element => {
		scroller.scrollTo(element, {
			duration: 1000,
			delay: 50,
			smooth: true,
			offset: -65
		});
		props.onClose(false);
	};

	return (
		<Drawer
			anchor="right"
			open={props.open}
			onClose={() => props.onClose(false)}
		>
			<List component="nav">
				<ListItem button onClick={() => scrollToElement("Home")}>
					Home
				</ListItem>

				<ListItem button onClick={() => scrollToElement("Info")}>
					Info
				</ListItem>
				<ListItem button onClick={() => scrollToElement("HightLight")}>
					Hightlight
				</ListItem>
				<ListItem button onClick={() => scrollToElement("Pricing")}>
					Pricing
				</ListItem>
				<ListItem button onClick={() => scrollToElement("Location")}>
					Location
				</ListItem>
			</List>
		</Drawer>
	);
};

export default SideBar;
