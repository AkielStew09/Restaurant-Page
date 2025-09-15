import "./styles.css";
import "./img/cutlery.png";
import {renderHome} from "./home.js";

const homeButton = document.querySelector("button.homeButton");
homeButton.addEventListener("click", renderHome);

