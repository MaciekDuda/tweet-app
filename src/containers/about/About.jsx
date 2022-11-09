import React from "react";
import { Features } from "../../components";
import "./about.css";
import logo from "../../assets/logo2.svg";

const About = () => {
	return (
		<div className="reTweet__about section__margin" id="about">
			<div className="reTweet__about-features">
				<Features title="Czym jest Retweet?" text="ReTweet to miejsce, gdzie możesz szybko sprawdzić najnowsze tweety z kont, które obserwujesz. Dzięki komunikacji z API ReTweet wyświetli Ci najnowsze tweety.
				"/>
			</div>
			<div className="reTweet__about-heading">
				<h1 className="gradient__text-blue">
					ReTweet to Twoj ulubiony twitter w jednym miejscu
				</h1>
				<span><img src={logo} alt="logo" /></span>
			</div>
			<div className="reTweet__about-container">
				<Features title="Polityka" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quae, sequi esse eveniet quasi voluptatum. Culpa aliquid quam similique dignissimos?" />
				<Features title="Sport" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quae, sequi esse eveniet quasi voluptatum. Culpa aliquid quam similique dignissimos?"/>
				<Features title="Kultura" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quae, sequi esse eveniet quasi voluptatum. Culpa aliquid quam similique dignissimos?"/>
			</div>
		</div>
	);
};

export default About;
