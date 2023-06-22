import React, {useState} from "react";
import crewbg from "../../space-tourism-website-main/starter-code/assets/crew/background-crew-desktop.jpg";
import "./Crew.scss";
import Info from "./Info";
function Crew() {
    const [index, setIndex] = useState(0);
    return ( 
        <div className="crew-container" style={{backgroundImage: `url(${crewbg})`}}>
            <div className="crew-cover">
                <div className="crew-header">
                    <span>02</span>
                    <h4>meet your crew</h4>
                </div>

                <div className="crew-content">
                    <Info pos={index}/>
                </div>

                <div className="control-content">
                    <div className={`btn-control ${index === 0 ? 'btn-active' : ""}`}  onClick={()=>setIndex(0)}>
                        
                    </div>
                    <div className={`btn-control ${index === 1 ? 'btn-active' : ""}`} onClick={()=>setIndex(1)}>
                        
                    </div>
                    <div className={`btn-control ${index === 2 ? 'btn-active' : ""}`} onClick={()=>setIndex(2)}>
                        
                    </div>
                    <div className={`btn-control ${index === 3 ? 'btn-active' : ""}`} onClick={()=>setIndex(3)}>
                        
                    </div>
                </div>
            </div>

            
        </div>
     );
}

export default Crew;