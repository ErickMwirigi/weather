import React, {useState , useEffect} from "react";
import WD from "./data";

function DailyData(){
    const [dailyweather, setDailyWeather] = useState([]);
    const [data, setData] =useState(false)

     // useEffect(() => {
        //fetch("https://api.weatherbit.io/v2.0/forecast/daily?city=Nairobi&key=9875b20a90bd4a48883b67d76db3e073")
        //  .then((r) => r.json())
         // .then((data) => setDailyWeather(data.data));
      // }, []);
    
     function handleUser(){
       setData(Anga);
     }

     function handleFarmer(){
       setData(Mkulima)
     }



     
    
      const Anga = WD.filter(w => w.datetime === '2023-09-12').map((weather) => 
      {return  <li key={Object.keys(WD[0])}>
        <h1>MAX TEMPERATURE : {weather.app_max_temp} Celsius</h1>
        <h1>MIN TEMPERATURE : {weather.app_min_temp} Celcius</h1>
        <h1>PRECIPITATION : {weather.precip} mm</h1>
        <h1>POP : {weather.pop} %</h1>
      </li>})
    
    
      const Mkulima = WD.filter(F => F.datetime === '2023-09-12').map((shamba) =>
      {return <li key={Object.keys(WD[0])}>
           <h1>WEATHER DESC:  {shamba.weather.description}</h1>
           <h1>WIND DIRECTION: {shamba.wind_cdir_full}</h1>
           <h1>WIND SPEED: {shamba.wind_gust_spd} KM/HR</h1>
           <h1>SNOW: {shamba.snow}</h1>
      </li>}
      )
      

    return (
        <div className="daily"> 
          <div>

             <h1 className="Head">Weather Today</h1> 

             <nav className="category">
               <li onClick={handleUser} className="user"> 
                <h1>ALL USERS</h1>
               </li>
               <li onClick={handleFarmer} className="farmer"> 
                <h1>FARMER</h1>
               </li>
             </nav>

             <ul>{data}</ul>  
          </div>        
        </div>
    )
}

export default DailyData;