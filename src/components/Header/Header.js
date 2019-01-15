import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideBar from "./SideBar";

export default class Header extends Component {
	state = {
		drawerOpen: false,
		headerShow: false
	};
	toggleDrawer = value => () => {
		this.setState({
			drawerOpen: value
		});
	};
	handleScroll = () => {
		if (window.scrollY > 0) {
			this.setState({ headerShow: true });
		} else {
			this.setState({ headerShow: false });
		}
	};

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}
	render() {
		return (
			<AppBar
				position="fixed"
				style={{
					backgroundColor: this.state.headerShow ? "#263238" : "transparent",
					boxShadow: "none",
					padding: "1px 0px"
				}}
			>
				<Toolbar>
					<div className="header_logo">
						<div className="header_logo_venue ">The Venue</div>
					</div>
					<IconButton
						aria-label="menu"
						color="inherit"
						onClick={this.toggleDrawer(true)}
					>
						<MenuIcon />
					</IconButton>
					<SideBar
						open={this.state.drawerOpen}
						onClose={this.toggleDrawer(false)}
					/>
				</Toolbar>
			</AppBar>
		);
	}
}
