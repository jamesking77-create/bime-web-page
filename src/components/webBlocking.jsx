import React from 'react'
import Timer from '../assets/bimeTimer.svg';
import WWW from '../assets/bimeWWW.svg';
import Blocker from '../assets/bimeBlocker.svg';
import '../styles/webBlocking.css';

const WebBlocking = () => {
  return (
    <div className='outer_container'>
        <div className='white-space'></div>
        <div className='img_container_'>
            <img className='svg_' src={Timer} alt="timer" />
            <img className='svg_' src={WWW} alt="timer" />
            <img className='svg_' src={Blocker} alt="timer" />
        </div>
    </div>
  )
}

export default WebBlocking;
