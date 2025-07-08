import "../styles/about.css"

const aboutSect = document.createElement("div");
aboutSect.classList.add("aboutSection");

const head = document.createElement("h1")
head.classList.add("head")
head.textContent = "Our Story"

const tag = document.createElement("p");
tag.classList.add("tag")
tag.textContent = "Where Spice Meets Soul"

const aboutDes = document.createElement("div");
aboutDes.classList.add("aboutDes");

const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");

p1.textContent = "At The Spicy Route, we're not just serving food — we're serving stories. Born from a passion for authentic South Asian flavors, our journey is rooted in family recipes, centuries-old spices, and a deep love for hospitality.";
p2.textContent = "Every dish we craft is a celebration of bold taste and comforting familiarity. Whether it's the sizzling aroma of tandoori grills or the delicate sweetness of traditional desserts, our menu is designed to take you on a journey — one bite at a time.";
p3.textContent = "Our ingredients are locally sourced, our techniques are time-honored, and our kitchen is led by chefs who cook from the heart. From intimate dinners to joyful gatherings, we aim to create an experience that lingers long after the last bite. Join us at The Spicy Route —";

aboutDes.append(p1, p2, p3)

const endQuote = document.createElement("p")
endQuote.classList.add("endQuote");
endQuote.textContent = "Crafted with care. Served with spice. Loved by all.";

aboutSect.append(head, tag, aboutDes, endQuote)

export default function about(content) {
    content.appendChild(aboutSect)
}