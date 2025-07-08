import chickenSamosa from '../images/menuItems/chicken_samosa.png';
import papriChaat from '../images/menuItems/papri_chaat.png';
import tandooriWings from '../images/menuItems/tandoori_wings.png';
import hummusPlatter from '../images/menuItems/hummus_platter.png';

import butterChicken from '../images/menuItems/butter_chicken.png';
import beefNihari from '../images/menuItems/beef_nihari.png';
import paneerTikka from '../images/menuItems/paneer_tikka.png';
import chickenKarahi from '../images/menuItems/chicken_karahi.png';
import muttonHandi from '../images/menuItems/mutton_handi.png';
import chanaMasala from '../images/menuItems/chana_masala.png';

import garlicNaan from '../images/menuItems/garlic_naan.png';
import steamedRice from '../images/menuItems/steamed_rice.png';
import raita from '../images/menuItems/raita.png';

import gulabJamun from '../images/menuItems/gulab_jamun.png';
import kheer from '../images/menuItems/kheer.png';
import mangoKulfi from '../images/menuItems/mango_kulfi.png';


const menuData = {
  starters: [
    {
      name: "Chicken Samosa",
      image: chickenSamosa,
      price: "PKR 250",
      description: "Crispy pastry filled with spiced minced chicken."
    },
    {
      name: "Papri Chaat",
      image: papriChaat,
      price: "PKR 200",
      description: "Crispy wafers topped with chutneys, yogurt, and chickpeas."
    },
    {
      name: "Tandoori Wings",
      image: tandooriWings,
      price: "PKR 350",
      description: "Smoky chicken wings marinated in tandoori masala."
    },
    {
      name: "Hummus Platter",
      image: hummusPlatter,
      price: "PKR 280",
      description: "Creamy hummus served with naan wedges and olives."
    }
  ],
  maincourse: [
    {
      name: "Butter Chicken",
      image: butterChicken,
      price: "PKR 700",
      description: "Creamy tomato-based chicken curry with rich spices."
    },
    {
      name: "Beef Nihari",
      image: beefNihari,
      price: "PKR 800",
      description: "Slow-cooked beef stew served with naan or roti."
    },
    {
      name: "Paneer Tikka Masala",
      image: paneerTikka,
      price: "PKR 650",
      description: "Grilled paneer cubes in a rich, spiced tomato curry."
    },
    {
      name: "Chicken Karahi",
      image: chickenKarahi,
      price: "PKR 750",
      description: "Tender chicken cooked with tomatoes, ginger, and green chilies."
    },
    {
      name: "Mutton Handi",
      image: muttonHandi,
      price: "PKR 900",
      description: "Boneless mutton cooked in creamy yogurt-based gravy."
    },
    {
      name: "Chana Masala",
      image: chanaMasala,
      price: "PKR 600",
      description: "Spicy chickpea curry served with fresh coriander and lemon."
    }
  ],
  sides: [
    {
      name: "Garlic Naan",
      image: garlicNaan,
      price: "PKR 100",
      description: "Clay-oven baked naan topped with garlic butter."
    },
    {
      name: "Steamed Rice",
      image: steamedRice,
      price: "PKR 120",
      description: "Light and fluffy basmati rice, perfectly cooked."
    },
    {
      name: "Raita",
      image: raita,
      price: "PKR 80",
      description: "Cool yogurt with cucumber, mint, and spices."
    }
  ],
  desserts: [
    {
      name: "Gulab Jamun",
      image: gulabJamun,
      price: "PKR 180",
      description: "Soft dough balls soaked in rose-cardamom syrup."
    },
    {
      name: "Kheer",
      image: kheer,
      price: "PKR 200",
      description: "Creamy rice pudding with nuts and saffron."
    },
    {
      name: "Mango Kulfi",
      image: mangoKulfi,
      price: "PKR 220",
      description: "Traditional mango-flavored frozen dessert."
    }
  ]
};

export default menuData;
