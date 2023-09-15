
import React, { useState } from 'react';
import DailyData from './DailyData';
import Weekly from './WeeklyData';
import Header from './Header';


function Home({ WeatherData }) {
    const [ display , setDisplay ] = useState("")

        const dataDisplay = display === "weekly" ? <Weekly weatherInfo={WeatherData} /> : <DailyData weatherInfo={WeatherData} />

        function handleDisplay(event){
         const value = event.target.value
         setDisplay(value) 
        }

  return (
    <React.Fragment>
      <Header />
      <div className='homeHeader'>
        <div className="selectbtn">
          <button className="select" value="daily" onClick={handleDisplay}>Daily Data</button>
          <button className="select" value="weekly" onClick={handleDisplay}>Weekly Data</button>
        </div>
      <div className='content'>
        {dataDisplay}
      </div>
      </div>
    </React.Fragment>
    
  );
}

export default Home;
