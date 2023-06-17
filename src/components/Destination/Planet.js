import React from "react";
import { useParams } from "react-router-dom";

function Planet() {
    const planets = [
    {
        planet: "moon",
        introduce: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        time: "3 days"
    },
    {
        planet: "mars",
        introduce: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 MIL. km",
        time: "9 months"
    },
    {
        planet: "europa",
        introduce: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 MIL. km",
        time: "3 years"
    },
    {
        planet: "titan",
        introduce: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 BIL. km",
        time: "7 years"
    },

    ];
    const params = useParams();

    const _planet = planets.find(p => p.planet === params.planet);

    return (
        <div className="planet-info">
            <h1>{_planet.planet}</h1>

            <p>{_planet.introduce}</p>

            <div className="planet-time-travel">
                <div className="distance">
                    <span>AVG. DISTANCE</span>
                    <h4>{_planet.distance}</h4>
                </div>
                <div className="time">
                    <span>Est. travel time</span>
                    <h4>{_planet.time}</h4>
                </div>
            </div>
        </div>
    );
}

export default Planet;