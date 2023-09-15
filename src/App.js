import React, {useEffect , useState} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from './SignUpForm.js';
import './App.css';

function App() {
      const [ logIn , setLogIns ] = useState("")

      const fetchData = ()=>{
  
          fetch("http://localhost:8002/User-data")
          .then(resp => resp.json())
          .then(data => setLogIns(data))
      }
  
      useEffect(
          ()=> fetchData(),
          []
      )

  return (
    <React.Fragment>
        <Routes>
          <Route path="/" element={<Login userData={logIn}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
     </React.Fragment>
  );
}

export default App;
