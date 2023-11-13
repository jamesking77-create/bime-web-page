import React from 'react'
import Timer from '../assets/bimeTimer.svg';
import WWW from '../assets/bimeWWW.svg';
import Blocker from '../assets/bimeBlocker.svg';
import '../styles/webBlocking.css';

const WebBlocking = () => {
  return (
    <div className='outer_container'>
        <h1 style={{color: '#fff'}}>Web Blocking</h1>
        <div className='white-space'></div>
        <div className='img_container_'>
            <div class="img_wrapper_">
                <img className='svg_' src={Timer} alt="timer" />
                <p className='img_text_'>Bime offers a timer on calendar, now <br />
                you can select your desired time frame for web blocking easy pizzy.
                </p>
            </div>

            <div class="img_wrapper_">
                <img className='svg_' src={WWW} alt="timer" />
                <p className='img_text_'>Bime powered by a matching algorithim allows <br />
                you to select multiple domain fast and easy.
                </p>
            </div>

            <div class="img_wrapper_">
                <img className='svg_' src={Blocker} alt="timer" />
                <p className='img_text_'>With a 3rd version web blocking module, <br />
                 you can now block any desired domain of your choice.</p>
            </div>
        </div>
        
    </div>
  )
}

export default WebBlocking;
