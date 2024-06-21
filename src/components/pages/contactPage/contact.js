import React, { useState } from "react";
import "../../../App.css";
import { Link } from 'react-router-dom';
import "./contact.css";
import contactImage from "./contactImage.jpg"
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
    let captchaValue = false
    function receipt() {
        document.getElementById("receipt").hidden=false
        document.getElementById("thanksButton").hidden=true
    }
    function reload() {
        window.location.reload();
        
    }
    function onChange(value) {
        captchaValue = true
      }
    async function onclickSubmit(e) {

        e.preventDefault() 
        var fname = document.getElementById("fname");
        var lname = document.getElementById("lname");
        var email = document.getElementById("email");
        var category = document.getElementById("category");
        var desc = document.getElementById("desc");
        var loader = document.getElementById("loader");
           

        fname.style.borderColor = "black";
        lname.style.borderColor = "black";
        email.style.borderColor = "black";
        category.style.borderColor = "black";
        desc.style.borderColor = "black";

        if (fname.value === ""){
            document.getElementById("fnameErr").hidden = false;
            fname.focus();
            fname.style.borderColor = "red";
            fname.style.borderWidth = "3px";    
            return
        } else{document.getElementById("fnameErr").hidden = true;}
        if (lname.value === ""){
                document.getElementById("lnameErr").hidden = false;
                lname.focus();
                lname.style.borderColor = "red";
                lname.style.borderWidth = "3px";    
                return
        } else{document.getElementById("lnameErr").hidden = true;}
        if (email.value === ""){
                document.getElementById("emailErr").hidden = false;
                email.focus();
                email.style.borderColor = "red";
                email.style.borderWidth = "3px";    
                return
        } else{document.getElementById("emailErr").hidden = true;}
        if (category.value === "0"){
                document.getElementById("errHidden").hidden = false;
                category.focus();
                category.style.borderColor = "red";
                category.style.borderWidth = "3px";    
                return
        } else{document.getElementById("errHidden").hidden = true;}
        if (desc.value === ""){
            document.getElementById("descErrHidden").hidden = false;
            desc.focus();
            desc.style.borderColor = "red";
            desc.style.borderWidth = "3px";
            return
        } else{document.getElementById("descErrHidden").hidden = true;}
        if (captchaValue !== true){
            document.getElementById("captchaErr").hidden = false;
        } else{
            document.getElementById("emailConf").innerHTML = email.value;
            document.getElementById("nameConf").innerHTML = fname.value;
            document.getElementById("thanksBox").hidden = false;
            document.getElementById("formParent").hidden = true;  
            try {        
                document.getElementById("contactParent").style.opacity = "0.5";
                const response = await fetch("https://script.google.com/macros/s/AKfycbybzOoymiKW8UwmaTDDVlaUHFWHK_Uz8pMd43UAHeChXv02dsr_SmkKJ--mV-mtJulY/exec", { 
                    mode: "no-cors",
                    method: "POST",
                    headers: {  
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "fname": fname.value,
                        "lname": lname.value,
                        "email": email.value,
                        "category": category.value,
                        "desc": desc.value
                    })
                })         
            } catch (error) {
                console.error(error)
            }
            

    }

    }

    return (
        <div className="contactParent">
            <div id="thanksBox" className="thanksBox" hidden={true}>
                <div className="thanksTitle">Contact Form</div>
                <div className="thanksText">Thank you <b><span id="nameConf"></span></b> for filling out our form! Your input is valuable and will help us serve you better!</div>
                                
                <button id="thanksButton" className="thanksButton" type="submit" onClick={receipt} hidden={false}>Email me my receipt</button>
                <strong><div id="receipt" className="emailConf" hidden={true}>Sent an email to <span id="emailConf">check this</span></div></strong>
                <button className="thanksButton" onClick={reload}>Submit Another Response</button>
                <Link to="/home" className="linkButton" >Return to Homepage</Link>

            </div>


            
            <div id="formParent" hidden={false}>
                <div className="navBarBg"> </div>
                <div class="titleParent">
                    <div className="contactImgParent">
                    <img className="contactImg" src={contactImage} />
                    </div>
                    <div className="contactTitle">
                        <h1 className="centered">Contact Us!</h1>
                    </div>
                </div>
                <div className="container">
                <p className="contactDescription">
                        <h2>Have any questions?</h2>
                        <h2>We'd love to hear from you!</h2>
                        <h4>(Note: you may also message us through one of the social medias at the bottom of the page)</h4>
                    </p>
                    <b><form id="contactForm" className="box" onSubmit={(e) => onclickSubmit(e)}>
                        <label for="fname" className="label">First Name</label>
                        <input id="fname" className="input" placeholder="" />
                        <label id="fnameErr" className="err" hidden={true}>First Name Required</label>
                        <label for="lname" className="label">Last Name</label>
                        <input id="lname" className="input" placeholder="" />
                        <label id="lnameErr" className="err" hidden={true}>Last Name Required</label>
                        <label for="email" className="label">Your Email</label>
                        <input id="email" className="input" placeholder="" />
                        <label id="emailErr" className="err" hidden={true}>Email Required</label>
                        <label for="category" className="label">What can we help you with?</label>
                        <select id="category" className="select">
                            <option value="0">- Select -</option>
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Partnership Information">Partnership Information</option>
                            <option value="Website Malfunction/Feedback">Website Malfunction/Feedback</option>
                            <option value="Other">Other</option>
                            </select>
                        <label id="errHidden" className="err" hidden={true}>Please select an option</label>

                        <textarea id="desc" className="textarea" rows={4} maxlength="300" placeholder="Type here. . ."></textarea>
                        <label id="descErrHidden" className="descErr" hidden={true}>Description Required</label>

                        <ReCAPTCHA sitekey="6LdDCuMpAAAAAI2SistJgvgTdxgDPL2BtIXRfW03" onChange={onChange}/>
                        <label id="captchaErr" className="err" hidden={true} value="">Please Finish The reCAPTCHA</label>
                        
                        <button type="submit" onClick={onclickSubmit} className="submit">SUBMIT</button>

                    </form></b>
                </div>
            </div>
            </div> 


    );
}


export default Contact;

