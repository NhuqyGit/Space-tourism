import React, { useState } from "react";
import "./App.scss"
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home/Home";
import Destination from "./components/Destination/Destination";
import Crew from "./components/Crew/Crew";
import Technology from "./components/Technology/Technology";
import Header from "./components/Header/Header";
import Planet from "./components/Destination/Planet";
import homebg from "./space-tourism-website-main/starter-code/assets/home/background-home-desktop.jpg";
import desbg from "./space-tourism-website-main/starter-code/assets/destination/background-destination-desktop.jpg";
import crewbg from "./space-tourism-website-main/starter-code/assets/crew/background-crew-desktop.jpg";
import techbg from "./space-tourism-website-main/starter-code/assets/technology/background-technology-desktop.jpg";

function App() {
  const [bg, setBg] = useState(homebg);
  const handleChange = (str)=>{
    if(str==="moon"){
      setBg(homebg);
    }
    if(str==="des"){
      setBg(desbg);
    }
    if(str==="crew"){
      setBg(crewbg);
    }
    if(str==="tech"){
      setBg(techbg);
    }
  }
  return (
    <div className="App" style={{backgroundImage: `url(${bg})`}}>
      <Router>
        <Header changeBg={handleChange}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/destination" element={<Destination />}>
            <Route path=":planet" element={<Planet/>} />
          </Route>
          <Route path="/crew" element={<Crew/>}/>
          <Route path="/technology" element={<Technology/>}/>
        </Routes>
        <Outlet />
        
      </Router>

    </div>
  );
}

export default App;