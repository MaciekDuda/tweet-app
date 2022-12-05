import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterFollowButton,
	TwitterHashtagButton,
	TwitterMentionButton,
	TwitterTweetEmbed,
	TwitterMomentShare,
	TwitterDMButton,
	TwitterVideoEmbed,
	TwitterOnAirButton,
} from "react-twitter-embed";
import "./test.css";

const Test = () => {
	const [tweets, setTweets] = useState([]);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts?_limit=0")
			.then((res) => {
				console.log(res);
				setTweets(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="reTweet__test section__padding">
			<div className="reTweet__tweets-heading">
				<h1 className="gradient__text">Co nowego w polityce? Sprawdźmy!</h1>
			</div>
			<div className="reTweet__test_embed">
				<TwitterTimelineEmbed
					className="reTweet__test_embed__tweet"
					borderColor="#000000"
					linkColor="#78e3eb"
					onLoad={function noRefCheck() {}}
					options={{
						height: 500,
						width: 400,
					}}
					placeholder={null}
					screenName="pisorgpl"
					sourceType="profile"
					theme="light"
					tweetLimit={5}
				/>
				<TwitterTimelineEmbed
					className="reTweet__test_embed__tweet"
					borderColor="#000000"
					linkColor="#78e3eb"
					onLoad={function noRefCheck() {}}
					options={{
						height: 500,
						width: 400,
					}}
					placeholder={null}
					screenName="nowePSL"
					sourceType="profile"
					theme="light"
					tweetLimit={5}
				/>
				<TwitterTimelineEmbed
					className="reTweet__test_embed__tweet"
					borderColor="#000000"
					linkColor="#78e3eb"
					onLoad={function noRefCheck() {}}
					options={{
						height: 500,
						width: 400,
					}}
					placeholder={null}
					screenName="PL_2050"
					sourceType="profile"
					theme="light"
					tweetLimit={5}
				/>
				<TwitterTimelineEmbed
					className="reTweet__test_embed__tweet"
					borderColor="#000000"
					linkColor="#78e3eb"
					onLoad={function noRefCheck() {}}
					options={{
						height: 500,
						width: 400,
					}}
					placeholder={null}
					screenName="__Lewica"
					sourceType="profile"
					theme="light"
					tweetLimit={8}
				/>
				<TwitterTimelineEmbed
					className="reTweet__test_embed__tweet"
					borderColor="#000000"
					linkColor="#78e3eb"
					onLoad={function noRefCheck() {}}
					options={{
						height: 500,
						width: 400,
					}}
					placeholder={null}
					screenName="Platforma_org"
					sourceType="profile"
					theme="light"
					tweetLimit={5}
				/>
				<TwitterTimelineEmbed
					className="reTweet__test_embed__tweet"
					borderColor="#000000"
					linkColor="#78e3eb"
					onLoad={function noRefCheck() {}}
					options={{
						height: 500,
						width: 400,
					}}
					placeholder={null}
					screenName="KONFEDERACJA_"
					sourceType="profile"
					theme="light"
					tweetLimit={5}
				/>
			</div>
			{tweets.map((tweet) => {
				return (
					<div className="reTweet__test-container_tweet" key={tweet.id}>
						<h2 className="reTweet__test-container_tweet-title">
							{tweet.title}
						</h2>
						<p className="reTweet__test-container_tweet-text">{tweet.body}</p>
						<div className="button">
							<div className="btn">Akcja</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Test;
