import React from "react";
import "./App.scss"
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home/Home";
import Destination from "./components/Destination/Destination";
import Crew from "./components/Crew/Crew";
import Technology from "./components/Technology/Technology";
import Header from "./components/Header/Header";
import Planet from "./components/Destination/Planet";
// import homebg from "./space-tourism-website-main/starter-code/assets/home/background-home-desktop.jpg";

function App() {
  return (
    <div className="App" >
      <Router>
        <Header />
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