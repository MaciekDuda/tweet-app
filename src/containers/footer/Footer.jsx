import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";



const Footer = () => {


	return (
		<div className="reTweet__footer section__padding" id="footer">
			<div className="reTweet__footer-heading">
				<h1 className="gradient__text">ReTweet Twitter App</h1>
			</div>
			<div className="reTweet__footer-btn">
				<p>Postaw mi kawę</p>
			</div>
			<div className="reTweet__footer-links">
				<div className="reTweet__footer-links_logo">
					<img src={logo} alt="logo" />
          <p>ReTweet</p>
				</div>
				<div className="reTweet__footer-links_div">
					<h4>Linki</h4>
					<a href="www.twitter.com">Twitter</a>
					<a href="www.facebook.com">Facebook</a>
					<a href="www.linkedin.com">LinkedIn</a>
				</div>
				<div className="reTweet__footer-links_div">
					<h4>Informacje</h4>
					<p>Regulamin</p>
					<p>Polityka prywatności</p>
					<p>Pliki cookie</p>
				</div>
				<div className="reTweet__footer-links_div">
					<h4>Kontakt</h4>
					<p>Aleja Postępu 20</p>
					<p>01-222 Warszawa</p>
					<p>kontakt@retweet.eu</p>
				</div>
			</div>
      <div className="reTweet__footer-copyright">
        <p>2022 copyright © ReTweet</p>
      </div>
		</div>
	);
};

export default Footer;
