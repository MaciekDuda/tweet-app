import React from "react";
import {
	Timeline,
	Logos,
	Features,
	Navbar,
} from "../../tweet-app/src/components";
import {
	Footer,
	Header,
	Tweets,
	About,
	Next,
} from "../../tweet-app/src/containers";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<div className="gradient__bg">
				<div className="bg__tweet-layer">
					<Navbar />
					<Header />
					<Logos />
					<Tweets />
					<About />
					<Next />
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default App;
