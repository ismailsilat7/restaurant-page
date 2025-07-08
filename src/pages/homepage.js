import "../styles/homepage.css"
import freshIcon from "../images/fresh.svg"
import rapidIcon from "../images/rapid.svg"
import supportIcon from "../images/support.svg"

import img1 from "../images/slideshow-images/1.png"
import img2 from "../images/slideshow-images/2.png"
import img3 from "../images/slideshow-images/3.png"
import img4 from "../images/slideshow-images/4.png"
import img5 from "../images/slideshow-images/5.png"

import arrowL from "../images/left.svg"
import arrowR from "../images/right.svg"


const homeServices = {
    "Fresh" : freshIcon,
    "Rapid" : rapidIcon,
    "Support" : supportIcon
}

const slideShowImages = [img1, img2, img3, img4, img5]

const homeSection = document.createElement('div');
homeSection.classList.add('home-sect');

const info = document.createElement('div');
info.classList.add('home-info');

const tagline = document.createElement('h2')
tagline.classList.add('tagline')
const taglineKeyWord = document.createElement('span');
taglineKeyWord.textContent = "flavor";
tagline.append("Authentic, aromatic, and unforgettable ", taglineKeyWord, ".");

const homeButtons = document.createElement('div');
homeButtons.classList.add('home-buttons');

const menuButton = document.createElement("button");
menuButton.textContent = 'View Menu';
menuButton.classList.add('menu-button')
const reserveButton = document.createElement('button');
reserveButton.textContent = 'Reserve a Table';
reserveButton.classList.add('reserve-button')
homeButtons.append(menuButton, reserveButton);

const services = document.createElement('div');
services.classList.add('services');

for(let key in homeServices) {
    const service = document.createElement('div');
    service.classList.add(`${key.toLowerCase()}-service`)
    service.classList.add('service');
    const icon = document.createElement('img');
    icon.src = homeServices[key];
    icon.alt = `${key} Icon`
    const text = document.createElement('p')
    text.textContent = key;
    
    service.append(icon, text);
    services.appendChild(service);
}

info.append(tagline, homeButtons, services)


const slideShow = document.createElement('div')
slideShow.classList.add('slideshow')

const slideImg = document.createElement('img');
slideImg.classList.add('slide-img');
slideImg.src = slideShowImages[0];
slideImg.alt = "Delicious dish";

const prevButton = document.createElement('button');
prevButton.classList.add('slideshow-button', 'prev-button');
const left = document.createElement('img');
left.src = arrowL;
prevButton.appendChild(left)

const nextButton = document.createElement('button');
nextButton.classList.add('slideshow-button', 'next-button');
const right = document.createElement('img');
right.src = arrowR;
nextButton.appendChild(right);

slideShow.append(slideImg, prevButton, nextButton);

homeSection.append(info, slideShow)

let currentSlide = 0;
let slideshowInterval;

function showSlide(index) {
    currentSlide = (index + slideShowImages.length) % slideShowImages.length;
    slideImg.src = slideShowImages[currentSlide];
}

function startSlideshow() {
    clearInterval(slideshowInterval);
    slideshowInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000);
}

startSlideshow(0)
prevButton.addEventListener('click', () => {
    showSlide(currentSlide - 1);
    startSlideshow();
});

nextButton.addEventListener('click', () => {
    showSlide(currentSlide + 1);
    startSlideshow();
});


export default function homepage(content, render, states) {
    menuButton.addEventListener('click', () => {
        render(states.MENU)
    });
    reserveButton.addEventListener('click', () => {
        render(states.RESERVE)
    })
    content.appendChild(homeSection)
}