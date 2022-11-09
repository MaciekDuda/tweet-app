import React from "react";
import "./logos.css";
import { platforma, pl2050, pis, psl, lewica, konfederacja } from "./imports";

const Logos = () => {
	return (
		<div className="reTweet__logos section__padding">
			<div className="reTweet_logos-container">
				<div>
					<img src={pis} alt="logo pis" />
				</div>
				<div>
					<img src={psl} alt="logo psl" />
				</div>
				<div>
					<img src={pl2050} alt="logo PL050" />
				</div>
				<div>
					<img src={lewica} alt="logo lewica" />
				</div>
				<div>
					<img src={platforma} alt="logo platformy" />
				</div>
				<div>
					<img src={konfederacja} alt="logo konfederacja" />
				</div>
			</div>
		</div>
	);
};

export default Logos;
