import React, { useState , useEffect } from 'react';
import { ReactComponent as Search } from "./Assets/🦆 icon _search_.svg";

const SearchBar = ({ runFetch }) => {
  const [city, setCity] = useState('');
  const [time, setTime] = useState(new Date());
  const [ date, setDate] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  function handleChange(e){
    setDate(e.target.value)
    
  }

  function searchCity(){
    runFetch(city)
  }

  const handleInputChange = (e) => {
    setCity(e.target.value);
    console.log(city)
  };

  return (
    <div className="search-bar">
      <div className="clock">
        {time.toLocaleTimeString()}
      </div>
      <div className="weather-buttons">
        <input type="date" placeholder="Select a date and time" value={date} onChange={handleChange}/>
        <div className="search-btn">
          <input type="text" id='searchBar' placeholder="Search city..." value={city} onChange={handleInputChange} />
          <button id="searchIcon" onClick={searchCity}><Search /></button>
        </div>
        
      </div>
    </div>
  );
};

export default SearchBar;
