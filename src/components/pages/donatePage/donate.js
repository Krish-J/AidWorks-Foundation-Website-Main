import React from "react";
import "../../../App.css";
import "./donate.css";
import {Link} from "react-router-dom";
import donateImage from "./donateImage.png"

function Donate() {
    return (
        <div className="donateParent">
            <div className="navBarBg"> </div>
            <div className="donateTitle">
                <h1 className="wavy">Donate to Us!</h1>
            </div>
            
            <p className="donateDescription">        
                <h2>Nutrition and Dietary Needs:</h2>
                <ul>
                    <li>
                        <strong>Diversified Meal Options:</strong> Introduce a diverse menu for the 83 families at Days Inn that recieve the same lunch and dinner everyday.
                    </li>
                    <li>
                        <strong>Promote Healthier Snacks:</strong> Enhance the quality and variety of nutritional snacks for the many Days Inn K-12 students that don't have access to nutritious snacks. 
                    </li>
                </ul>

                <h2>Enhancing Well-being:</h2>
                <ul>
                    <li>
                    <strong>Sports Equipment:</strong> Providing sport items such as soccer goals, basketball hoops, and balls may encourage physical activity and team building.
                    </li>
                    <li>
                    <strong>Entertainment Sponsorships:</strong> Helping fund events such as magic shows, tournaments, and more will bring joy and excitement to the community.
                    </li>
                    <li>
                    <strong>Vendor Partnerships:</strong> Occasional visits from ice cream trucks or other popular vendors are a delightful treat for residents.
                    </li>
                    <li>
                    <strong>Diverse Clothing Options:</strong> Ensuring that students have a variety of clothing can prevent discrimination and feel confident in their skin!
                    </li>
                </ul>
                <h2>Financial Contributions:</h2>
                <ul>
                    <li>
                    We welcome monetary donations to further our mission. All contributions will be directly utilized to acquire the aforementioned goods or to sponsor community-building events. Your support can make a tangible difference in the lives of these 83 families!
                    </li>
                </ul>
            </p>
            <div className="donateImgParent">
                <img className="donateImg" src={donateImage}/>
            </div>
            <div className="donateButtonParentParent">
                {/*<button className="donateButtonParent">
                    <a target="_blank" rel="noopener" href="https://gofund.me/d5f96728" className="donateButton"> GoFundMe</a>
                </button>*/}
            </div>
            {/* <a href="https://www.freepik.com/free-vector/tiny-people-standing-near-box-donation-food-delivery-volunteers-giving-healthy-grocery-goods-charity-flat-vector-illustration-social-support-humanitarian-help-community-sharing-concept_21683580.htm#query=food%20donations&position=0&from_view=keyword&track=ais">Image by pch.vector</a> on Freepik */}
        </div>
    );
}

export default Donate;