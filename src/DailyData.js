import React from "react";

function DailyData({ weatherInfo }){
    // const [dailyweather, setDailyWeather] = useState(data);
    

   // useEffect(() => {
        //fetch("https://api.weatherbit.io/v2.0/forecast/daily?city=Nairobi&key=9875b20a90bd4a48883b67d76db3e073")
        //  .then((r) => r.json())
         // .then((data) => setDailyWeather(data.data));
     // }, []);
    
   const { data } = weatherInfo
  //  console.log(data[3].datetime)

     function handleUser(){
       console.log("This is Traveller 0010")
     }

     function handleFarmer(){
      console.log("This is Farmer Joe")
     }
    
      // const Anga = weatherInfo.data.filter(w => w.datetime === '2023-09-12').map((weather) => 
      // {return  <li key={weather.datetime}>
      //   <h1>MAX TEMPERATURE : {weather.app_max_temp} Celsius</h1>
      //   <h1>MIN TEMPERATURE : {weather.app_min_temp} Celcius</h1>
      //   <h1>PRECIPITATION : {weather.precip} mm</h1>
      //   <h1>POP : {weather.pop} %</h1>
      // </li>})
 
      // const Mkulima = weatherInfo.data.filter(F => F.datetime === '2023-09-12').map((shamba) =>
      // {return <li key={shamba.datetime}>
      //      <h1>WEATHER DESCRIPTION:  {shamba.weather.description}</h1>
          
      // </li>}
      // )
      

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
             
          </div>        
        </div>
    )
}

export default DailyData;