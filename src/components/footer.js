import "./footer.css";
import React from "react";

function Footer() {
    
    return (
        <><head>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css' />
        </head>
        <div class="wrapper">
            <div class="iconWrapper">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=61561200076591&mibextid=JRoKGi" class="icon facebook">
                    <span><i class="fab fa-facebook-f"></i></span>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/aidworks-foundation/" class="icon linkedin"> 
                    <span><i class="fab fa-linkedin"></i></span>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/aidworksfoundation/" class="icon instagram">
                    <span><i class="fab fa-instagram"></i></span>
                </a>
            </div>
            <p class="copyRightText">
                &copy; AidWorks Foundation 2025
            </p>
            </div>
            </>
    );
}

export default Footer;