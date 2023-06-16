import React from "react";
import { useParams } from "react-router-dom";

function Planet() {
    const planets = ["moon", "mars", "europa", "titan"];
    const params = useParams();

    const _planet = planets.find(p => p === params.planet);

    return (
    <>
    <h1>{_planet}</h1>
    </> );
}

export default Planet;