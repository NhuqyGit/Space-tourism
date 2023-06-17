import React from "react";
import techbg from "../../space-tourism-website-main/starter-code/assets/technology/background-technology-desktop.jpg";
import "./Technology.scss";
function Technology() {
    return ( 
        <div className="tech-container" style={{backgroundImage: `url(${techbg})`}}>
            <h1>Technology</h1>
        </div>
     );
}

export default Technology;