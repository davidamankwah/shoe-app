import shoes1 from "./assests/shoe1.jpg";
import shoes2 from "./assests/shoe2.jpg";
import shoes3 from "./assests/shoe3.jpg";
import shoes4 from "./assests/shoe4.jpg";
import shoes5 from "./assests/shoe5.jpg";
import shoes6 from "./assests/shoe6.jpg";
import shoes7 from "./assests/shoe7.jpg";
import shoes8 from "./assests/shoe8.jpg";
import shoes9 from "./assests/shoe9.jpg";
import axios from "axios";

export const PRODUCTS = [
  
];

// Fetch the product data from the server
axios.get('http://localhost:4000/api/boots')
  .then(response => {
    const data = response.data;
    PRODUCTS.push(...data);
  })
  .catch(error => console.error(error));
