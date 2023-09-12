import React, {useState , useEffect} from "react";
import WD from "./data";

function DailyData(){
    const [dailyweather, setDailyWeather] = useState([]);
    

   // useEffect(() => {
        //fetch("https://api.weatherbit.io/v2.0/forecast/daily?city=Nairobi&key=9875b20a90bd4a48883b67d76db3e073")
        //  .then((r) => r.json())
         // .then((data) => setDailyWeather(data.data));
     // }, []);
    
     function handleUser(){
       return
     }

     function handleFarmer(){

     }



     console.log(Object.keys(WD[0]))
    
      const Anga = WD.filter(w => w.datetime === '2023-09-12').map((weather) => 
      {return  <li key={Object.keys(WD[0])}>
        <h1>MAX TEMPERATURE : {weather.app_max_temp} Celsius</h1>
        <h1>MIN TEMPERATURE : {weather.app_min_temp} Celcius</h1>
        <h1>PRECIPITATION : {weather.precip} mm</h1>
        <h1>POP : {weather.pop} %</h1>
      </li>})
    
    console.log(Object.keys(WD[0]))
      const Mkulima = WD.filter(F => F.datetime === '2023-09-12').map((shamba) =>
      {return <li key={Object.keys(WD[0])}>
           <h1>WEATHER DESC:  {shamba.weather.description}</h1>
          
      </li>}
      )
      

    return (
        <div className="daily"> 
          <div>
             <h1 className="Head">Weather Today</h1> 
             <nav className="category">
               <li onClick={handleUser}> 
                <a> USER</a>
               </li>
               <li onClick={handleFarmer}> 
                <a> FARMER</a>
               </li>
             </nav>
             <ul>{Mkulima}</ul>  
          </div>        
        </div>
    )
}

export default DailyData;