import React from "react";
import "../../../App.css";
import "./contact.css";
import { Component } from 'react';
import contactImage from "./contactImage.jpg"



function Contact() {
    return (
        <div className="contactParent">
            <div className="navBarBg"> </div>
                <div class="titleParent">
                    <div className="contactImgParent">
                        <img className="contactImg" src={contactImage}/>
                    </div>

                    <div className="contactTitle"> 
                        <h1 className="centered">Contact Us!</h1>        
                    </div>
                </div>


            <div className="container">       
                <p className="contactDescription">      
                    <h2>Need to get in touch with us?</h2> 
                    <h2>Fill out the form!</h2>
                </p>


                <div className="box">
                    
                    <b><form>
                        <label className="label">First Name</label>
                        <input className="input" placeholder=""/>

                        <label className="label">Last Name</label>
                        <input className="input"  placeholder=""/>

                        <label className="mail">Your Email</label>
                        <input className="input" placeholder=""/>


                        <label className="label">What can we help you with?</label>

                        <select className="select">
                            <option>- Select -</option>
                            <option>General Inquiry</option>
                            <option>Partnership Information</option>
                            <option>Website Malfunction/Feedback</option>
                        </select>

                        <textarea className="textarea" rows={4} maxlength="300" placeholder="Type here. . ."></textarea>
                        <button className="submit">SUBMIT</button>

                    </form></b>
                </div>
            </div> 


        </div>
    );
}
export default Contact;

