import React from 'react';
import '../styles/page.css'
import Hero from './hero';
import WebBlocking from './webBlocking';
import Preview from './preview';
import Reviews from './reviews';

const Page = () => {
  return (
    <div className='page-container'>
      <Hero/>
      <WebBlocking />
      <Preview/>
      <Reviews/>
    </div>
  );
}

export default Page;
