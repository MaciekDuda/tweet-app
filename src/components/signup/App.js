import React from "react";
import Form from "../../signup/src/components/Form";
import Header from "../../signup/src/components/Header";

import "./App.css";

const App = () => {
	return (
		<div className="App">
			<div className="bg__tweet-layer reTweet__signup">
				<div className="reTweet__signup-container">
					<Header />
					<Form />
				</div>
			</div>
		</div>
	);
};

export default App;
