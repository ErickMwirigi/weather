import React, { useState } from 'react';

const WeatherButtons = ({ onDailyClick, onWeeklyClick }) => {
  const [showDaily, setShowDaily] = useState(false);

  return (
    <div className="weather-buttons">

      <button onClick={() => { setShowDaily(true); onDailyClick(); }}>
        Daily Weather
      </button>

      <button onClick={() => { setShowDaily(false); onWeeklyClick(); }}>
        Weekly Weather
      </button>
      
      {showDaily ? (
        <input type="datetime-local" placeholder="Select a date and time" />
      ) : (
        <input type="week" placeholder="Select a week" />
      )}
    </div>
  );
};

export default WeatherButtons;
