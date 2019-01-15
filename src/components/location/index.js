import React from "react";

const Location = () => {
	return (
		<div className="location_wrapper ">
			<div className="location_tag">
				<div>Find us on the map</div>
			</div>
			<div className="center_wrapper">
				<iframe
					title="location"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12088.555446422919!2d-73.99373482421538!3d40.75897047269578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855b8fb3083%3A0xa0f9aef176042a5c!2sTheater+District%2C+New+York%2C+NY!5e0!3m2!1sen!2sus!4v1547516028584"
					width="100%"
					height="480px"
					frameBorder=".5"
					// title="time square"
					allowFullScreen
				/>
			</div>
		</div>
	);
};

export default Location;
