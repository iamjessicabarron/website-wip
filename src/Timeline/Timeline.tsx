import React from 'react';
import TimelineElement from './TimelineElement'

import './Timeline.css'

import CountdownImage from './TimelineImage-Countdown.png'
import JoinFourImage from './TimelineImage-JoinFour.png'

const Timeline: React.FC = () => {
  return (
    <div className="timeline">
        <div className="arrowTail"></div>
        <div className="arrowTrack"></div>
        <TimelineElement 
          title="Join Four" 
          year="2019"
          desc="A coding challenge, turned excuse to learn some new things and make something pretty. A somewhat skeuomorphic recreated of the game Connect Four, for the web. Designed in Figma, created with ReactJS + TypeScript with CSS Animations. "
          image={JoinFourImage}
        />
        <TimelineElement 
          title="Countdown" 
          year="2018"
          desc="I can barely keep track of what month it is, let alone what day. Countdown is a tiny Chrome Extension written in JavaScript that tells you when stuff is, relative to right now."
          image={CountdownImage}
          link="https://chrome.google.com/webstore/detail/countdown/djgeajcnfiaokhbkfnepbfokanhggjao"
        />
    </div>
  );
}

export default Timeline;
