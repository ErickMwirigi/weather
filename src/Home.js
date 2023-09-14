
import React, { useEffect, useState } from 'react';
import DailyData from './DailyData';
import Weekly from './WeeklyData';
import WeatherData from './data';
import Header from './Header';


function Home() {
    // const [ weatherData, setWeatherData ] = useState("")
        const [ display , setDisplay ] = useState("")

    // const fetchData = ()=>{

    //     fetch("http://localhost:8002/weather-data")
    //     .then(resp => resp.json())
    //     .then(data => setWeatherData(data))
    // }

    // useEffect(
    //     ()=> fetchData(),
    //     []
    // )
        // console.log(WeatherData)

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
