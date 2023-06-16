import { NavLink } from "react-router-dom";
import "./Header.scss";
import { useState } from "react";
import React from "react";
function Header(props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
      };

    const handleChange = (title)=>{
        props.changeBg(title)
    }
    return ( 
        <div className="header-container">
            <div className="icon-start">
                <svg width="43" height="43" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group 2">
                    <circle id="Oval" cx="24" cy="24" r="24" fill="white"/>
                    <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z" fill="#0B0D17"/>
                    </g>
                </svg>
            </div>
            <div className="navbar" style={{ display: isOpen ? "block" : "none" }}>
                <div className="close-icon" onClick={handleClick}>
                    <svg width="19" height="19" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group">
                        <rect id="Rectangle Copy" x="2.5752" y="0.954102" width="24" height="3" transform="rotate(45 2.5752 0.954102)" fill="#D0D6F9"/>
                        <rect id="Rectangle Copy 3" x="0.454102" y="17.9246" width="24" height="3" transform="rotate(-45 0.454102 17.9246)" fill="#D0D6F9"/>
                        </g>
                    </svg>
                </div>
                <ul className="navbar-menu">
                    <li className="list-item" onClick={()=>handleChange("moon")}>
                        <NavLink to="/" ><span>00</span> Home</NavLink>
                    </li>
                    <li className="list-item" onClick={()=>handleChange("des")}>
                        <NavLink to="/destination/moon" ><span>01</span> Destination</NavLink>
                    </li>
                    <li className="list-item" onClick={()=>handleChange("crew")}>
                        <NavLink to="/crew" ><span>02</span> Crew</NavLink>
                    </li>
                    <li className="list-item" onClick={()=>handleChange("tech")}>
                        <NavLink to="/technology" ><span>03</span> Technology</NavLink>
                    </li>
                </ul>
            </div>
            <div className="header-line"></div>
            <div className="menu-icon" onClick={handleClick}>
                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group">
                    <rect id="Rectangle" width="24" height="3" fill="#D0D6F9"/>
                    <rect id="Rectangle Copy" y="9" width="24" height="3" fill="#D0D6F9"/>
                    <rect id="Rectangle Copy 2" y="18" width="24" height="3" fill="#D0D6F9"/>
                    </g>
                </svg>
            </div>

        </div>
     );
}

export default Header;