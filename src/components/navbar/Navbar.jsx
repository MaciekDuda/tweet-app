import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";

const Menu = () => (
	<>
		<p>
			<a href="#home">Home</a>
		</p>
		<p>
			<a href="#tweets"></a>Tweety
		</p>
		<p>
			<a href="#about">Czym jest ReTweet?</a>
		</p>
		<p>
			<a href="#next"></a>W planach
		</p>
		<p>
			<a href="#footer"></a>Kontakt
		</p>
	</>
);

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div className="reTweet__navbar">
			<div className="reTweet__navbar-links">
				<div className="reTweet__navbar-links_logo">
					<img src={logo} alt="logo" />
					<p>ReTweet</p>
				</div>
				<div className="reTweet__navbar-links_container">
					<Menu />
				</div>
			</div>
			<div className="reTweet__navbar-sign">
				<p>Zaloguj</p>
				<button type="button">Rejestracja</button>
			</div>
			<div className="reTweet__navbar-menu">
				{toggleMenu ? (
					<RiCloseLine
						color="#fff"
						size={30}
						onClick={() => setToggleMenu(false)}
					/>
				) : (
					<RiMenu3Line
						color="#fff"
						size={30}
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{toggleMenu && (
					<div className="reTweet__navbar-menu_container scale-up-center">
						<div className="reTweet__navbar-menu_container-links">
							<Menu />
							<div className="reTweet__navbar-menu_container-links-sign">
								<p>Zaloguj</p>
								<button type="button">Rejestracja</button>
							</div>
						</div>
					</div>
				)}{" "}
			</div>
		</div>
	);
};

export default Navbar;
