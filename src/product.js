import axios from "axios";

export const PRODUCTS = [
    // Array to store product data
];

// Fetch the product data from the server
axios.get('http://localhost:4000/api/boots')
  .then(response => {
    const data = response.data;
    PRODUCTS.push(...data); // Push the retrieved data into the PRODUCTS array
  })
  .catch(error => console.error(error)); // Log any errors that occur during the request

