import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";
import './App.css';
import DailyData from "./DailyData";
import Clock from "./Clock";
import Header from "./Header";

function App() {
  return (

    

    <>
       <Home/>
        
        <Header/>
        <Routes>
          <Route path="/login" element={<Login />} />
          
        </Routes>

     </>
  );
}

export default App;
