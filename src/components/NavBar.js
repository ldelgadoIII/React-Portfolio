import React from 'react';
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();
    
    return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light" style={ style.nav }>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
             Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
             Portfolio
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
             Contact
            </Link>
          </li>
        </ul>   
      </nav>
    </>
    )
}

const style = {
  nav: { 
    backgroundColor: "rgb(234 238 221)",
    boxShadow: "0px 0px 10px #e0776a"
  }
}

export default NavBar
