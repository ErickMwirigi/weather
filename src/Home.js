import React, { useEffect, useState } from 'react';
import DailyData from './DailyData';
import Weekly from './WeeklyData';


function Home() {
    const [ weatherData, setWeatherData ] = useState("")

    const fetchData = ()=>{

        fetch("http://localhost:8002/weather-data")
        .then(resp => resp.json())
        .then(data => setWeatherData(data))
    }

    useEffect(
        ()=> fetchData(),
        []
    )
        // console.log(weatherData.data)
  return (
    <div>
      <DailyData weatherInfo={weatherData}/>
      <Weekly weatherInfo={weatherData}/>
    </div>
    
  );
}

export default Home;
