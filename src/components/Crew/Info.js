import first from "../../space-tourism-website-main/starter-code/assets/crew/image-douglas-hurley.png";
import second from "../../space-tourism-website-main/starter-code/assets/crew/image-mark-shuttleworth.png";
import third from "../../space-tourism-website-main/starter-code/assets/crew/image-victor-glover.png";
import fourth from "../../space-tourism-website-main/starter-code/assets/crew/image-anousheh-ansari.png";

function Info(props) {
    const info = [
    {
        position: "Commander",
        name: "Douglas Hurley",
        introduce: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        image: first
    },
    {
        position: "Mission Specialist",
        name: "MARK SHUTTLEWORTH",
        introduce: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        image: second
    },
    {
        position: "PILOT",
        name: "Victor Glover",
        introduce: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
        image: third
    },
    {
        position: "Flight Engineer",
        name: "Anousheh Ansari",
        introduce: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        image: fourth
    }
    ]
    
    return ( 
        <>
            <div className="introduce">
                <h4>{info[props.pos].position}</h4>
                <h1>{info[props.pos].name}</h1>
                <p>{info[props.pos].introduce}</p>
            </div>

            
            {/* <div className="info-image" style={{backgroundImage: `url(${info[props.pos].image})`}}> */}
            <div className="info-image">
                <img src={info[props.pos].image} alt=""></img>
            </div>
        </>
    );
}

export default Info;