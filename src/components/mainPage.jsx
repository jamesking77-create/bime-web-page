import React from 'react';
import'../styles/mainPage.css';
import TopNav from './topnav';
import Page from './page';

const MainPage = () => {
  return (
    <div className='main-page'>
      <TopNav/>
      <Page/>
    </div>
  );
}

export default MainPage;
