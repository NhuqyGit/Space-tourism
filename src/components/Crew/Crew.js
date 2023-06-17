import React from "react";
import crewbg from "../../space-tourism-website-main/starter-code/assets/crew/background-crew-desktop.jpg";
import "./Crew.scss";

function Crew() {
    return ( 
        <div className="crew-container" style={{backgroundImage: `url(${crewbg})`}}>
            <h1>Crew</h1>
        </div>
     );
}

export default Crew;