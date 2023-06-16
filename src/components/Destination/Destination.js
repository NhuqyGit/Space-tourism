import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Destination.scss";
import moon from "../../space-tourism-website-main/starter-code/assets/destination/image-moon.png"
import mars from "../../space-tourism-website-main/starter-code/assets/destination/image-mars.png"
import europa from "../../space-tourism-website-main/starter-code/assets/destination/image-europa.png"
import titan from "../../space-tourism-website-main/starter-code/assets/destination/image-titan.png"

function Destination() {
    const [planet, setPlanet] = useState(moon);
    return ( 
        <div className="destination-container">
            <div className="destination-header">
                <span>01</span>
                <h4>Pick your destination</h4>
            </div>
            <div className="destination-content">
                <div className="planet-image" style={{backgroundImage: `url(${planet})`}}></div>
                <div className="des-introduce">
                    <ul className="menu-planet">
                        <li className="planet" onClick={()=> setPlanet(moon)}>
                            <NavLink to="/destination/moon">MOON</NavLink>
                        </li>
                        <li className="planet" onClick={()=> setPlanet(mars)}>
                            <NavLink to="/destination/mars">MARS</NavLink>
                        </li>
                        <li className="planet" onClick={()=> setPlanet(europa)}>
                            <NavLink to="/destination/europa">EUROPA</NavLink>
                        </li>
                        <li className="planet" onClick={()=> setPlanet(titan)}>
                            <NavLink to="/destination/titan">TITAN</NavLink>
                        </li>
                    </ul>

                    <div className="planet-content">
                        <Outlet />
                        {/* <div id="moon">MOON</div>
                        <div id="mars">MARS</div>
                        <div id="europa">EUROPA</div>
                        <div id="titan">TITAN</div> */}
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Destination;