import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './test.css'


const Test = () => {

    const [tweets, setTweets] = useState([])

    useEffect(() => {
      axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=6')
      .then(res => {
        console.log(res)
        setTweets(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }, [])

  return (
    <div className='reTweet__test section__padding'>
         {tweets.map((tweet) => {
         return (
            <div className="reTweet__test-container_tweet" key={tweet.id}>
               <h2 className="reTweet__test-container_tweet-title">{tweet.title}</h2>
               <p className="reTweet__test-container_tweet-text">{tweet.body}</p>
               <div className="button">
               <div className="btn">Akcja</div>
               </div>
            </div>
         );
      })}
      </div>
  )
}

export default Test