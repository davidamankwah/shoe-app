import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
    // Destructure the data prop
  const { pid, productName, price, productImage } = props.data;
   // Get the addToCart and cartItems functions from the ShopContext
  const { addToCart, cartItems } = useContext(ShopContext);

  // Get the count of the current product in the cart
  const cartItemCount = cartItems[pid];

  return (
    <div className="product">
      {/* Display the product image, product name and price */}
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> €{price}</p>
      </div>
      {/* Add to Cart button */}
      <button className="addToCartBttn" onClick={() => addToCart(pid)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      
    </div>
  );
};