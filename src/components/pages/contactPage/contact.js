import React, { useState } from "react";
import "./contact.css";
import ReCAPTCHA from "react-google-recaptcha";
import { TailSpin } from 'react-loader-spinner';
import env from "react-dotenv";
const API_URL = process.env.REACT_APP_MACROS_LINK;



function Contact() {
    // let captchaValue = false;
    // const captchaRef = useRef();
    const [emailReceipt, setEmailReceipt] = useState(false);


    function reload() {
        window.location.reload();       
    }

    function emailReceiptChange () {
        setEmailReceipt(!emailReceipt);
    }

    async function onclickSubmit(e) {
        e.preventDefault()  
        // const token = captchaRef.current.getValue();
        // captchaRef.current.reset();

        var firstName = document.getElementById("firstName");
        var lastName = document.getElementById("lastName");
        var email = document.getElementById("email");
        var category = document.getElementById("category");
        var desc = document.getElementById("desc");

        if (firstName.value === ""){
            document.getElementById("firstNameErr").hidden = false;
            firstName.focus();
            firstName.style.borderColor = "red";
            firstName.style.borderWidth = "3px";    
            return
        } else{document.getElementById("firstNameErr").hidden = true;}
        if (lastName.value === ""){
            document.getElementById("lastNameErr").hidden = false;
            lastName.focus();
            lastName.style.borderColor = "red";
            lastName.style.borderWidth = "3px";    
            return
        } else{document.getElementById("lastNameErr").hidden = true;}
        if (email.value === ""){
            document.getElementById("emailErr").hidden = false;
            email.focus();
            email.style.borderColor = "red";
            email.style.borderWidth = "3px";    
            return
        } else{document.getElementById("emailErr").hidden = true;}
        if (category.value === "0"){
            document.getElementById("categoryErr").hidden = false;
            category.focus();
            category.style.borderColor = "red";
            category.style.borderWidth = "3px";    
            return
        } else{document.getElementById("categoryErr").hidden = true;}
        if (desc.value === ""){
            document.getElementById("descErr").hidden = false;
            desc.focus();
            desc.style.borderColor = "red";
            desc.style.borderWidth = "3px";
            return
        } else{document.getElementById("descErr").hidden = true;
        // if (captchaValue === false){
        //     document.getElementById("captchaErr").hidden = false;
        //     return
        // } else{
        //    document.getElementById("captchaErr").hidden = true;        
            // document.getElementById("emailConf").innerHTML = email.value;
            document.getElementById("nameConf").innerHTML = firstName.value;
            document.getElementById("loader").hidden = false;
            setTimeout(function(){
                document.getElementById("loader").hidden = true;
                document.getElementById("thanksBox").hidden = false;
                document.getElementById("formParent").hidden = true; 
            }, 2000);
            
            try {        
                const response = await fetch("https://script.google.com/macros/s/AKfycbyVO6K7aJzb1yeYigo2re7nVgRzUv8ZueAE6Ynqfzjkvl4gIjcZAnu_ER1K2KIjL8aF/exec", { 
                    mode: "no-cors",
                    method: "POST",
                    headers: {  
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "firstName": firstName.value,
                        "lastName": lastName.value,
                        "email": email.value,
                        "category": category.value,
                        "desc": desc.value,
                        "emailReceipt": emailReceipt,

                    })
                })         
            } catch (error) {
                console.error(error)
            }
        }
    }

    return ( 
        <div className="contactParent">
            <div className="navBarBg"></div>
            <div id="loader" className="loader" hidden={true}><TailSpin color="#DD6C73"/></div>

            <div id="formParent" hidden={false}>
                <div className="container">
                    <p className="contactDescription">
                            <h2>Have any questions?</h2>
                            <h2>We'd love to hear from you!</h2>
                    </p>
                    <form id="contactForm" className="box" onSubmit={(e) => onclickSubmit(e)}><b>
                        <label for="firstName" className="label">First Name</label>
                        <input id="firstName"  placeholder="" />
                        <label id="firstNameErr" className="err" hidden={true}>First Name Required</label>

                        <label for="lastName" className="label">Last Name</label>
                        <input id="lastName"  placeholder="" />
                        <label id="lastNameErr" className="err" hidden={true}>Last Name Required</label>

                        <label for="email" className="label">Your Email</label>
                        <input id="email"  placeholder="" />
                        <label id="emailErr" className="err" hidden={true}>Email Required</label>

                        <label for="category" className="label">What can we help you with?</label>
                        <select id="category" className="select">
                            <option value="0">- Select -</option>
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Partnership Information">Partnership Information</option>
                            <option value="Website Malfunction/Feedback">Website Malfunction/Feedback</option>
                            <option value="Other">Other</option>
                            </select>
                        <label id="categoryErr" className="err" hidden={true}>Please select an option</label>
                        
                        <textarea id="desc" className="textarea" rows={4} maxlength="300" placeholder="Type here. . ."></textarea>
                        <label id="descErr" className="err" hidden={true}>Description Required</label>
                                                
                        {/* <ReCAPTCHA
                            id=""
                            sitekey={"6LdDCuMpAAAAAI2SistJgvgTdxgDPL2BtIXRfW03"}
                            class="g-recaptcha"
                            ref={captchaRef}
                        />
                        <label id="captchaErr" className="err" hidden={true}>reCAPTCHA Required</label> */}

                        <div style={{"display":"flexbox", "margin-top":"10px"}}>
                            <input style={{"transform":"scale(1.5)", "margin-right": "15px", "width": "15px"}} type="checkbox" checked={emailReceipt} value={emailReceipt} onChange={emailReceiptChange} />
                            <label className="label" style={{"margin-top":"0", "color":""}} for="link-checkbox">Email me my receipt</label>
                        </div>

                        <button type="submit" onClick={onclickSubmit} className="submit">SUBMIT</button>
                    </b></form>
                </div>
            </div>

            <div id="thanksBox" className="thanksBox" hidden={true}>
                <div className="thanksTitle">Contact Form</div>
                <div className="thanksText">Thank you <b><span id="nameConf"></span></b> for filling out our form! Your input is valuable and will help us serve you better!</div>
        
                <button className="thanksButton" onClick={reload}>Submit Another Form</button>
                <button className="thanksButton"><a href="/home">Return to Homepage</a></button>
            </div>

        </div> 


    );
}


export default Contact;

