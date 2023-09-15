import React from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

function Header({ fetchData }){



  return (
    <header className="header">
        <NavBar />        
        <h1>Weather App</h1>
        <div className='weather-buttons'>
          <SearchBar runFetch={fetchData}/>
        </div>
       
    </header>
  );
};

export default Header;
