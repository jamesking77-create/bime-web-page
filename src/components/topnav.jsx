import React, { useState, useEffect } from 'react';
import '../styles/topNav.css'

const TopNav = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(windowWidth < 768); 

  useEffect(() => {
   
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768); 
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="top-nav">
      {isMobile ? (
      
        <div className="dropdown">
          <button className="dropbtn"></button>
          <div className="dropdown-content">
            <a href="#">Web Blocking</a>
            <a href="#">User Stats</a>
            <a href="#">Bime Steps</a>
            <a href="#">Reviews</a>
          </div>
          <button className="downloadbtn">Download</button>
        </div>
      ) : (
       
        <div className="buttons">
          <div className='bime-logo'></div>
          <a href="#" id='navButton' className='b1'>Web Blocking</a>
          <a href="#" id='navButton' className='b2'>User Stats</a>
          <a href="#" id='navButton' className='b3'>Bime Steps</a>
          <a href="#" id='navButton' className='b4'>Reviews</a>
          <a href="#"  className='b5'>Download</a>
        </div>
      )}
    </nav>
  );
}

export default TopNav;
