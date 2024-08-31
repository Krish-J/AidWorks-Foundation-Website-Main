import "./donate.css";
import donateImage from "./donateImage.png"

function Donate() {
    return (
        <>
        <div className="navBarBg"> </div>

        <div className="donateParent">
            <div className="donateTitle">
                <h1>Donate to Us!</h1>
            </div>

            <div className="donateDescription">        
                <h2>Nutrition and Dietary Needs:</h2>
                <ul>
                    <li>
                        <b>Diversified Meal Options:</b> Introduce a diverse menu for the 83 families at Days Inn that recieve the same lunch and dinner everyday.
                    </li>
                    <li>
                        <b>Promote Healthier Snacks:</b> Enhance the quality and variety of nutritional snacks for the many Days Inn K-12 students that don't have access to nutritious snacks. 
                    </li>
                </ul>
                <h2>Enhancing Well-being:</h2>
                <ul>
                    <li>
                        <b>Sports Equipment:</b> Providing sport items such as soccer goals, basketball hoops, and balls may encourage physical activity and team building.
                    </li>
                    <li>
                        <b>Entertainment Sponsorships:</b> Helping fund events such as magic shows, tournaments, and more will bring joy and excitement to the community.
                    </li>
                    <li>
                        <b>Vendor Partnerships:</b> Occasional visits from ice cream trucks or other popular vendors are a delightful treat for residents.
                    </li>
                    <li>
                        <b>Diverse Clothing Options:</b> Ensuring that students have a variety of clothing can prevent discrimination and feel confident in their skin!
                    </li>
                </ul>
                <h2>Financial Contributions:</h2>
                    <p style={{'text-wrap': 'balance', 'width': '100vw'}}>We welcome monetary donations to further our mission. All contributions will be directly utilized to acquire the aforementioned goods or to sponsor community-building events. Your support can make a tangible difference in the lives of these 83 families!</p>
            </div>
                    
            <div className="donateImgParent">
                <img className="donateImg" src={donateImage}/>
            </div>

            <button className="donateButton"><a target="_blank" rel="noopener" href="https://www.zeffy.com/donation-form/caf7108e-39e1-49bc-8b2e-084bd8f3d8af">Donate Here</a></button>
        
        </div>
        </>
    );
}

export default Donate;