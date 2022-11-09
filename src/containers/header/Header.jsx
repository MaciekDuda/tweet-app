import React from "react";
import "./header.css";
import coffee from "../../assets/coffee.jpg";

const Header = () => {
	return (
		<div className="reTweet__header section__padding" id="home">
			<div className="reTweet__header-content">
				<h1 className="gradient__text"> Witaj na ReTweet! <br/><br/>
					To tutaj znajdziesz najbadziej aktualne tweety w jednym miejscu.
				</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
					quis sapiente aliquam. Nesciunt rerum sed error delectus! Quo itaque
					nisi, blanditiis illo quos reprehenderit, explicabo sapiente,
					consequatur sint eaque minus.
				</p>
				<div className="reTweet__header-content__input">
					<input type="email" placeholder="Twój e-mail" />
					<button type="button">Wyślij</button>
				</div>
			</div>
			<div className="reTweet__header-image">
				<img src={coffee} alt="coffee on the table" />
			</div>
		</div>
	);
};

export default Header;
