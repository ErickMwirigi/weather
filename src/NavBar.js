import React from "react";
import { NavLink } from "react-router-dom";


function NavBar (){
  return (
    <div>
        <NavLink to="/Daily">
            DailyData
        </NavLink>
    </div>
  )
}

export default NavBar;


