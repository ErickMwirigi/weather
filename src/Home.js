import React, { useEffect, useState } from 'react';
import DailyData from './DailyData';


function Home() {

    const [ weatherData, setWeatherData ] = useState([])

    const fetchData = ()=>{

        fetch("http://localhost:8002/weather-data")
        .then(resp => resp.json())
        .then(data => setWeatherData(data))
    }

    useEffect(
        ()=> fetchData(),
        []
    )
        console.log(weatherData)
  return (
    <DailyData data={weatherData}/>
  );
}

export default Home;
