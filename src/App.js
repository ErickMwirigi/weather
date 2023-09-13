import React, { useState } from 'react';
import './App.css'; 
import Clock from './Clock'; 
import SearchBar from './SearchBar';
import Buttons from './Buttons';
import ParagraphDisplay from './ParagraphDisplay';
import WeatherButtons from './WeatherButtons';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherSearch = (data) => {
    setWeatherData(data);
  };

  const renderWeatherInfo = () => {
    if (weatherData) {
      return (
        <ParagraphDisplay
          text="text"
          imageUrl="url"
        />
      );
    }
    return null;
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Weather App</h1>
        <Clock />
      </div>
      <div className="main-container">
        <div className="left-column">
          <SearchBar onSearch={handleWeatherSearch} />
          <Buttons />
          {renderWeatherInfo()}
        </div>
        <div className="right-column">
          <WeatherButtons
            onDailyClick={() => console.log('Daily weather clicked')}
            onWeeklyClick={() => console.log('Weekly weather clicked')}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
