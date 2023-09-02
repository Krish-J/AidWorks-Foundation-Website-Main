import React from "react";
import "../../../App.css";
import "./donate.css";
import {Link} from "react-router-dom";
import donateImage from "./donateImage.jpg"

function Donate() {
    return (
        <div className="donateParent">
            
            <h1 className="donateTitle">Donate to Us!</h1>
            
            <p className="donateDescription">        
                <strong>Nutrition and Dietary Needs:</strong>
                <ul>
                    <li>
                        <strong>Diversified Meal Options:</strong> Currently, 83 families at Day Inn receive the same meal for both lunch and dinner throughout the week. Introducing a diverse menu will enhance their dietary experience and overall health.
                    </li>
                    <li>
                        <strong>Promote Healthier Snacks:</strong> Many Day Inn residents, especially students attending Shrewsbury Public School, lack access to nutritious snacks. Enhancing the quality and variety of snacks can impact not only their academic performance but also their overall well-being.
                    </li>
                </ul>

                <strong>Enhancing Well-being through Non-Essential Goods:</strong>
                <ul>
                    <li>
                    <strong>Sports Equipment:</strong> Providing items such as soccer goals, basketball hoops, and balls can encourage physical activity and team building.
                    </li>
                    <li>
                    <strong>Entertainment Sponsorships:</strong> Events such as magic shows can bring joy and excitement to the community.
                    </li>
                    <li>
                    <strong>Vendor Partnerships:</strong> Occasional visits from ice cream trucks or other popular vendors can be a delightful treat for residents.
                    </li>
                    <li>
                    <strong>Diverse Clothing Options:</strong> Ensuring that students have a variety of clothing can prevent discrimination and boost self-esteem.
                    </li>
                </ul>
                <strong>Financial Contributions:</strong>
                <ul>
                    <li>
                    We welcome monetary donations to further our mission. All contributions will be directly utilized to acquire the aforementioned goods or to sponsor community-building events. Your support can make a tangible difference in the lives of these 83 families.
                    </li>
                </ul>
            </p>
            <div className="donateImgParent">
                <img className="donateImg" src={donateImage}/>
            </div>
            <button className="donateButtonParent">
                <a target="_blank" rel="noopener" href="https://www.gofundme.com/" className="donateButton"> GoFundMe</a>
            </button>
            {/* <a href="https://www.freepik.com/free-vector/tiny-people-standing-near-box-donation-food-delivery-volunteers-giving-healthy-grocery-goods-charity-flat-vector-illustration-social-support-humanitarian-help-community-sharing-concept_21683580.htm#query=food%20donations&position=0&from_view=keyword&track=ais">Image by pch.vector</a> on Freepik */}
        </div>
    );
}

export default Donate;