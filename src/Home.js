import React, { useEffect, useState } from 'react';
import DailyData from './DailyData';
import Weekly from './WeeklyData';
import WeatherData from './data';


function Home() {
    // const [ weatherData, setWeatherData ] = useState("")

    // const fetchData = ()=>{

    //     fetch("http://localhost:8002/weather-data")
    //     .then(resp => resp.json())
    //     .then(data => setWeatherData(data))
    // }

    // useEffect(
    //     ()=> fetchData(),
    //     []
    // )
        console.log(WeatherData)
  return (
    <div>
      <DailyData weatherInfo={WeatherData}/>
      <Weekly weatherInfo={WeatherData}/>
    </div>
    
  );
}

export default Home;
