import React from 'react';
import './timeline.css';

const Timeline = ({ imgUrl }) => {
  return (
    <div className='reTweet__tweets-container_timeline'>
      <div className='reTweet__tweets-container_timeline-image'>
        <img src={imgUrl} alt="timeline"/>
      </div>
    </div>
  )
}

export default Timeline