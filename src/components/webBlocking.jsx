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
            <div class="img_wrapper_">
                <img className='svg_' src={Timer} alt="timer" />
                <p className='img_text_'>Text for Timer</p>
            </div>

            <div class="img_wrapper_">
                <img className='svg_' src={WWW} alt="timer" />
                <p className='img_text_'>Text for WWW</p>
            </div>

            <div class="img_wrapper_">
                <img className='svg_' src={Blocker} alt="timer" />
                <p className='img_text_'>Text for Blocker</p>
            </div>
        </div>
    </div>
  )
}

export default WebBlocking;
