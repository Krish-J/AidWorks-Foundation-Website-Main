import "./Navbar.css";
import {Link} from "react-router-dom";
import logo from "./aidworksLogo.png";
import React, {useState} from "react";
function Navbar(){
    

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)
    return(
        <>
        <nav className="navbar">
            <div className={color ? "navbar-container navbar-container-bg" : "navbar-container"}>
                
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
                    <Link to="/contact" className="nav-item">
                        Contact Us
                    </Link>
                    {/* <Link to="/blog" className="nav-item">
                        Our Blog
                    </Link> */}
                    
            </div>
            <div className="dropdown">
                <label for="checkbox" className="hamburger">
                    <input type="checkbox" id="checkbox"></input>
                    <span className="line line--top"></span>
                    <span className="line line--middle"></span>
                    <span className="line line--bottom"></span>
                    <div className="dropdownMenu" onClick={hideMobileMenu}> 
                        <Link to="/donate" className="nav-itemDrop">
                            Donate
                        </Link>
                        <Link to="/ourteam" className="nav-itemDrop">
                            Our Team
                        </Link>
                        <Link to="/contact" className="nav-itemDrop">
                            Contact Us
                        </Link>
                        <Link to="/blog" className="nav-item">
                            Our Blog
                        </Link>
                    </div>
                </label> 
                
            </div>
            </div>
        </nav>
        </>
    );
}
function hideMobileMenu() {
    document.getElementById("checkbox").checked = false;
}

export default Navbar;