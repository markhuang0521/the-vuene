import React from "react";
import icon_calendar from "../../resources/icons/calendar.png";
import icon_location from "../../resources/icons/location.png";
import Fade from "react-reveal/Fade";

// import icon_menu from '../../resources/icons/menu.png'
const InfoPage = () => {
	return (
		<div className="bck_black">
			<div className="center_wrapper">
				<div className="vn_wrapper">
					<Fade bottom duration={2000}>
						<div className="vn_item">
							<div className="vn_outer">
								<div className="vn_inner">
									<div className="vn_icon_square bck_blue " />
									<div
										className="vn_icon"
										style={{ background: `url(${icon_calendar})` }}
									/>
									<div className="vn_title">Event Date & time</div>
									<div className="vn_desc"> Feb 20 2019 @10PM</div>
								</div>
							</div>
						</div>
						<div className="vn_item">
							<div className="vn_outer">
								<div className="vn_inner">
									<div className="vn_icon_square bck_yellow " />
									<div
										className="vn_icon"
										style={{ background: `url(${icon_location})` }}
									/>
									<div className="vn_title">Event Location</div>
									<div className="vn_desc"> 101 street Queens New York </div>
								</div>
							</div>
						</div>
					</Fade>
				</div>
			</div>
		</div>
	);
};

export default InfoPage;
