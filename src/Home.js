
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
        <div className="selectBtns">
        <select className={"selectBtn"} onClick={handleDisplay}>
            <option value={"weekly"}>Weekly Data</option>
            <option value={"daily"}>Daily Data</option>
        </select>
        </div>
              <div className='content'>
        {dataDisplay}
      </div>
      </div>
    </React.Fragment>
    
  );
}

export default Home;
