import React from 'react';
import NavBar from './NavBar';
import Clock from './Clock';

const Header = () => {
  return (
    <header className="header">
        <NavBar />        
        <h1>Weather App</h1>
        <Clock/>
      {/* content for the header*/}
    </header>
  );
};

export default Header;
