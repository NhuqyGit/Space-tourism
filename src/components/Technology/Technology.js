import React, {useState} from "react";
import techbg from "../../space-tourism-website-main/starter-code/assets/technology/background-technology-desktop.jpg";
import "./Technology.scss";
import info from "./TechInfo";

function Technology() {
    const [index, setIndex] = useState(0);

    return ( 
        <div className="tech-container" style={{backgroundImage: `url(${techbg})`}}>
            <div className="tech-cover">
                <div className="tech-header">
                    <span>03</span>
                    <h4>SPACE LAUNCH 101</h4>
                </div>

                <div className="tech-content">
                    <div className="tech-content--left">
                        <div className="tech-control">
                            <div className={`btn-control ${index === 0 ? 'btn-active' : ""}`}  onClick={()=>setIndex(0)}>    
                                <div>1</div>
                            </div>

                            <div className={`btn-control ${index === 1 ? 'btn-active' : ""}`} onClick={()=>setIndex(1)}>
                            <div>2</div>
                                
                            </div>
                            
                            <div className={`btn-control ${index === 2 ? 'btn-active' : ""}`} onClick={()=>setIndex(2)}>
                            <div>3</div>
                                
                            </div>
                        </div>

                        <div className="introduce">
                            <h4>THE TERMINOLOGY…</h4>
                            <h1>{info[index].name}</h1>
                            <p>{info[index].introduce}</p>
                        </div>
                    </div>

                    <div className="info-image" style={{backgroundImage: `url(${info[index].image})`}}></div>
                    {/* <div className="info-image">
                        <img src={info[index].image} alt=""></img>
                    </div> */}
                </div>
            </div>
        </div>
     );
}

export default Technology;