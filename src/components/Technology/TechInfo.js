import first from "../../space-tourism-website-main/starter-code/assets/technology/image-launch-vehicle-portrait.jpg";
import second from "../../space-tourism-website-main/starter-code/assets/technology/image-spaceport-portrait.jpg";
import third from "../../space-tourism-website-main/starter-code/assets/technology/image-space-capsule-portrait.jpg";

import _first from "../../space-tourism-website-main/starter-code/assets/technology/image-launch-vehicle-landscape.jpg";
import _second from "../../space-tourism-website-main/starter-code/assets/technology/image-spaceport-landscape.jpg";
import _third from "../../space-tourism-website-main/starter-code/assets/technology/image-space-capsule-landscape.jpg";

const info = [
    {
        name: "LAUNCH VEHICLE",
        introduce: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        image: window.innerWidth <= 990 ? _first : first
    },
    {
        name: "SPACEPORT",
        introduce: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        image: window.innerWidth <= 990 ? _second : second
    },
    {
        name: "SPACE CAPSULE",
        introduce: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        image: window.innerWidth <= 990 ? _third : third
    }
]

export default info;