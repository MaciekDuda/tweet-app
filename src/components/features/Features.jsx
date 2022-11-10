import React from 'react';
import './features.css';

const Features = ({ title, text }) => {
  return (
    <div className='reTweet__next-container-feature'>
      <div className='reTweet__features-container__feature-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='reTweet__feature-container__feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Features