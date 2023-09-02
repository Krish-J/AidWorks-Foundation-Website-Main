import "./Navbar.css";
import React from "react";
import {Link} from "react-router-dom";
import logo from "./aidworksLogo.png";

function Navbar(){
    return(
        <>
        <nav className="navbar">
            <div className="navbar-container">
                
                <Link to="/" className="navbar-logo">
                <img className="logoImage" src={logo}/>
                <p className="logoText">AidWorks Foundation</p>
                    
                </Link>
                <div className="navlink-container">
                    <Link to="/donate" className="nav-item">
                        Donate
                    </Link>
                    <Link to="/ourteam" className="nav-item">
                        Our Team
                    </Link>
                    <Link to="/contactus" className="nav-item">
                        Contact Us
                    </Link>
                    <label for="checkbox" className="hamburger">
                        <input type="checkbox" id="checkbox"></input>
                        <span className="line line--top"></span>
                        <span className="line line--middle"></span>
                        <span className="line line--bottom"></span>
                    </label> 
            </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar;