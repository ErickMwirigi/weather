import React , { useState } from "react";
import Description from "./Description"
import { ReactComponent as Rainny} from "./Assets/Rainny.svg"
import { ReactComponent as CoolTemp} from "./Assets/CoolTemp.svg"
import { ReactComponent as MaxTemp} from "./Assets/Temperature.svg"
import { ReactComponent as Sunshine} from "./Assets/Sunshine.svg"

function DailyData({ weatherInfo }){

    //const [dailyweather, setDailyWeather] = useState([]);
    const [data, setData] =useState("")

     // useEffect(() => {
        //fetch("https://api.weatherbit.io/v2.0/forecast/daily?city=Nairobi&key=9875b20a90bd4a48883b67d76db3e073")
        //  .then((r) => r.json())
         // .then((data) => setDailyWeather(data.data));
      // }, []);


    const dailyData  = weatherInfo.data

    function handleUser(event){
      const value = event.target.value
      setData(value)
     }

      const Anga = dailyData.filter(w => w.datetime === '2023-09-12').map((weather) => 
      {return  <li key={weather.datetime}>
                  <h3><Sunshine /><span> {weather.pop} %</span></h3>
                  <h3><MaxTemp /><span> {weather.app_max_temp} Celsius</span></h3>
                  <h3><CoolTemp /><span> {weather.app_min_temp} Celcius</span></h3>
                  <h3><Rainny /><span>{weather.precip} mm</span></h3>
                </li>})

 
     //const Mkulima = data.filter(F => F.datetime === '2023-09-12').map((shamba) =>
     //{return <li key={shamba.datetime}>
          // <h1>WEATHER DESCRIPTION:  {shamba.weather.description}</h1>
          
    
      const Mkulima = dailyData.filter(F => F.datetime === '2023-09-12').map((shamba) =>
      {return <li key={Object.keys([0])}>
                <h2>Weather Description: <span> {shamba.weather.description}</span></h2>
                <h2>Wind Direction:  <span> {shamba.wind_cdir_full}</span></h2>
                <h2>Wind Speed:  <span> {shamba.wind_gust_spd} KM/HR </span></h2>
                <h2>Snow:  <span> {shamba.snow} </span></h2>
              </li>}
      )
      const dataDisplay = data === "anga" ? Anga
    : Mkulima

    return (
          <div className="daily">
            <h1>Weather Today</h1> 
            <select className={"selectBtn"} onClick={handleUser}>
              <option value={"anga"}>All Users</option>
              <option value={"mkulima"}>Mkulima</option>
            </select>
            <div>
              <div className="daily-data">
                {dataDisplay}
              </div> 
                <Description display={data}/> 
            </div>
             
          </div>        
    )
}

export default DailyData;