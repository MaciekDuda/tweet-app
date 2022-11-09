import React from 'react';
import { Timeline } from "../../components";
import { tlpo, tl2050, tlpis, tlpsl, tllewica, tlkonf } from "../../components/timeline/imports";
import './tweets.css';

const Tweets = () => {
  return (
    <div className='reTweet__tweets section__padding' id="tweets">
      <div className='reTweet__tweets-heading'>
        <h1 className='gradient__text'>Co nowego w polityce? Sprawdźmy!</h1>
      </div>
      <div className='reTweet__tweets-container'>
        <Timeline imgUrl={tlpsl} />
        <Timeline imgUrl={tl2050} />
        <Timeline imgUrl={tlpis} />
        <Timeline imgUrl={tllewica} />
        <Timeline imgUrl={tlpo} />
        <Timeline imgUrl={tlkonf} />
      </div>
    </div>
  )
}

export default Tweets;