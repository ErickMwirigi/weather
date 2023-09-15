import React, {useEffect , useState} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from './SignUpForm.js';
import './App.css';

function App() {
      const [ logIn , setLogIns ] = useState("")
      const [ weatherData, setWeatherData ] = useState("")
  
      const fetchData = (city="Kisumu")=>{
  
          fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=4f92b0047455432c85eeb812927033b3`)
          .then(resp => resp.json())
          .then(data => setWeatherData(data))
      }
  
      useEffect(
          ()=> {
           const weather = fetchData()
          
          return () => clearInterval(weather)
          },
          []
      )
      const fetchLogin = ()=>{
  
          fetch("http://localhost:8002/User-data")
          .then(resp => resp.json())
          .then(data => setLogIns(data))
      }
  
      useEffect(
          ()=> {
            const login = fetchLogin()
            return () => clearInterval(login)
          },
          []
      )
          console.log(fetchData)
  return (
    <React.Fragment>
        <Routes>
          <Route path="/" element={<Login userData={logIn} WeatherData={weatherData} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home/*" element={<Home WeatherData={weatherData} runFetch={fetchData}/>} />
        </Routes>
     </React.Fragment>
  );
}

export default App;
