import "./styles.css";
//import "./img/cutlery.png";
import {renderHome} from "./pageScripts/home.js";
import {renderMenu} from "./pageScripts/menu.js";
import {renderAboutUs} from "./pageScripts/aboutUs.js";
import {renderContactUs} from "./pageScripts/contactUs.js";


let homeButton = document.querySelector("#homeBtn");
homeButton.addEventListener("click", renderHome);

let menuButton = document.querySelector("#menuBtn");
menuButton.addEventListener("click", renderMenu);

let aboutUsButton = document.querySelector("#aboutUsBtn");
aboutUsButton.addEventListener("click", renderAboutUs);

let contactUsButton = document.querySelector("#contactUsBtn");
contactUsButton.addEventListener("click", renderContactUs);


renderAboutUs();

