
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";
import './App.css';
import DailyData from './DailyData';



function App() {
  return (
    <div>
      <NavBar />
    
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Daily" element={<DailyData />}/>
        </Routes>

    </div>
  );
}

export default App;
