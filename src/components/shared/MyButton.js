import React from "react";
import Button from "@material-ui/core/Button";
import ticketIcon from "../../resources/icons/ticket.png";
const MyButton = ({ text, bck, color, link }) => {
	return (
		<div>
			<Button
				color="primary"
				variant="contained"
				size="large"
				href={link}
				target="_blank"
				style={{ background: bck, color: color }}
			>
				<img src={ticketIcon} alt="icon" className="iconImage" />
				{text}
			</Button>
		</div>
	);
};

export default MyButton;
