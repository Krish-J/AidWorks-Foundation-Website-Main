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
                    <h2>Have any questions?</h2> 
                    <h2>We'd love to hear from you!</h2>
                    <h4>(Note: you may also message us through one of the social medias at the bottom of the page)</h4>
                </p>


                <div className="box">
                    
                    <b><form>
                        <label className="label">First Name</label>
                        <input className="input" placeholder=""/>

                        <label className="label">Last Name</label>
                        <input className="input"  placeholder=""/>

                        <label className="label">Your Email</label>
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

