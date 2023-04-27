// imports 
import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { pid, productName, price, productImage } = props.data; //products are extracted from props.data using destructuring.
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);  //extracted from the ShopContext using the useContext hook. 

  //renders an item in the shopping cart with its image, name and price  
  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: €{price}</p>
        <div className="countHandler">
        {/* remove product from cart */}
          <button onClick={() => removeFromCart(pid)}> - </button>
          <input
            value={cartItems[pid]}
            // allows users to manually update the item count
            onChange={(e) => updateCartItemCount(Number(e.target.value), pid)}
          />
          {/* add product to cart */}
          <button onClick={() => addToCart(pid)}> + </button> //add product to cart
        </div>
      </div>
    </div>
  );
};