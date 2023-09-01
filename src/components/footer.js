import "./footer.css";
import {Link} from "react-router-dom";
import React from "react";

function Footer() {
    
    return (
        <><head>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css' />
        </head>
        <div class="wrapper">
            <div className="iconWrapper">
                <a target="_blank" rel="noopener" href="#" class="icon facebook">
                    <span><i class="fab fa-facebook-f"></i></span>
                </a>
                <a target="_blank" rel="noopener" href="https://www.linkedin.com/company/aidwork-foundation/" class="icon twitter"> 
                {/* Actually LinkedIn */}
                    <span><i class="fab fa-linkedin"></i></span>
                </a>
                <a target="_blank" rel="noopener" href="https://www.instagram.com/aidworksfoundation/" class="icon instagram">
                    <span><i class="fab fa-instagram"></i></span>
                </a>
                {/* <a href="#" class="icon github">
                    <div class="tooltip">Github</div>
                    <span><i class="fab fa-github"></i></span>
                </a>
                <a href="#" class="icon youtube">
                    <div class="tooltip">Youtube</div>
                    <span><i class="fab fa-youtube"></i></span>
                </a> */}
            </div>
            <p className="copyRightText">
                &copy; AidWorks Foundation 2023
            </p>
            </div>
            </>
    );
}

export default Footer;