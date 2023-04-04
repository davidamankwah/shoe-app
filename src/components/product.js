import React from 'react';
import { Button } from '@mui/material';

const Product = ({ id, name, price, addToCart }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <Button onClick={() => addToCart(id)} href='/cart'>Contact</Button>
      
    </div>
  );
};

export default Product;