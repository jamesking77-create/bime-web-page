import React from 'react';
import '../styles/page.css'
import Hero from './hero';
import WebBlocking from './webBlocking';

const Page = () => {
  return (
    <div className='page-container'>
      <Hero/>
      <WebBlocking />
    </div>
  );
}

export default Page;
