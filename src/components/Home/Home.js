import React from "react";
import "./Home.scss";
import homebg from "../../space-tourism-website-main/starter-code/assets/home/background-home-desktop.jpg";


function Home() {
    return ( 
        <div className="home-container" style={{backgroundImage: `url(${homebg})`}}>
            <div className="introduce">
                <h4>SO, YOU WANT TO TRAVEL TO</h4>
                <h1>SPACE</h1>
                <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
            </div>
            <div className="explore">
                <h4>EXPLORE</h4>
            </div>
        </div>
     );
}

export default Home;