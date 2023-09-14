import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

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
        <div className="weather-buttons">
          <input type="date" placeholder="Select a date and time" />
        </div>
    </header>
  );
};

export default Header;
