import homepage from "./pages/homepage";
import about from "./pages/about";
import menu from "./pages/menu";
import contact from "./pages/contact";
import reserve from "./pages/reserve";
import "./styles/index.css"

const states = {
    HOMEPAGE: "homepage",
    MENU: "menu",
    ABOUT: "about",
    CONTACT: "contact",
    RESERVE: "reserve"
}

let currentState = 5;
const content = document.getElementById("content");

function render(state) {
    if(state != currentState) {
        currentState = state;
        content.innerHTML = "";
        switch(state) {
            case states.HOMEPAGE:
                homepage(content, render, states)
                break;
            case states.ABOUT:
                about(content)
                break;
            case states.CONTACT:
                contact(content)
                break;
            case states.MENU:
                menu(content)
                break;
            case states.RESERVE:
                reserve(content);
                break;
            default:
                content.textContent = "Invalid State!"
                break;
        }
    }
}

render(states.HOMEPAGE);

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("homeBtn").addEventListener('click', () => render(states.HOMEPAGE));
    document.getElementById("menuBtn").addEventListener('click', () => render(states.MENU));
    document.getElementById("aboutBtn").addEventListener('click', () => render(states.ABOUT));
    document.getElementById("contactBtn").addEventListener('click', () => render(states.CONTACT));
    document.getElementById("reserveBtn").addEventListener('click', () => render(states.RESERVE));
});

