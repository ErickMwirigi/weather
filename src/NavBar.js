import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div >
      <NavLink className="Navlink" to="/home">
        Home
      </NavLink>
      <NavLink className="Navlink" to="/">
        Login
      </NavLink>
     
    </div>
  );
}

export default NavBar;




