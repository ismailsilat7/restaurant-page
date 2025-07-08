import "../styles/menu.css"
import menuData from "./menuData";

const menuTabs = {
    STARTERS: "starters",
    MAINCOURSE: "maincourse",
    SIDES: "sides",
    DESSERTS: "desserts"
}

let currentTab = 4;

function generateMenu(tab) {
    if (tab !== currentTab) {
        const buttons = tabs.querySelectorAll('button');
        currentTab = tab;

        menuContent.classList.add('fade-out');

        setTimeout(() => {
            menuContent.innerHTML = "";

            const dishes = menuData[tab];
            dishes.forEach(dish => {
                const card = document.createElement('div');
                card.classList.add('menu-card');

                const img = document.createElement('img');
                img.src = dish.image;
                img.alt = dish.name;

                const name = document.createElement('h3');
                name.textContent = dish.name;

                const desc = document.createElement('p');
                desc.textContent = dish.description;

                const price = document.createElement('span');
                price.textContent = dish.price;

                card.append(img, name, desc, price);
                menuContent.appendChild(card);
            });
            menuContent.classList.remove('fade-out');
        }, 100); 
        buttons.forEach(button => {
            button.classList.toggle('active', button.id === `${tab}Tab`);
        });
    }
}


const menuSection = document.createElement('div');
menuSection.classList.add('menu-sect')

const heading = document.createElement('h1');
heading.textContent = "Our Menu";

const desc = document.createElement('p');
desc.textContent = "Our menu brings together rich spices, wholesome ingredients, and handcrafted flavors to offer a dining experience you won't forget.";

const tabs = document.createElement('div');
tabs.classList.add('tabs');

const tabLabels = {
    STARTERS: "Starters",
    MAINCOURSE: "Mains",
    SIDES: "Sides",
    DESSERTS: "Desserts"
};

Object.entries(tabLabels).forEach(([key, label]) => {
    const tabButton = document.createElement('button');
    tabButton.id = `${menuTabs[key]}Tab`;
    tabButton.textContent = label;

    tabButton.addEventListener('click', () => {
        generateMenu(menuTabs[key]);
    });

    tabs.appendChild(tabButton);
});

const menuContent = document.createElement('div');
menuContent.classList.add('menu-content');

menuSection.append(heading, desc, tabs, menuContent);

generateMenu(menuTabs.STARTERS)

export default function menu(content) {
    content.append(menuSection);
}