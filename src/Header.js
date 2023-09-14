import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import WeatherButtons from './WeatherButtons';

function Header(){

    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, [])

  return (
    <header className="header">
        <NavBar />        
        <h1>Weather App</h1>
        <div className="clock">
          {time.toLocaleTimeString()}
        </div>
        <WeatherButtons />
    </header>
  );
};

export default Header;
