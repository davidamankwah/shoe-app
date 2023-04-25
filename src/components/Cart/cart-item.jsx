import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { pid, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(pid)}> - </button>
          <input
            value={cartItems[pid]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), pid)}
          />
          <button onClick={() => addToCart(pid)}> + </button>
        </div>
      </div>
    </div>
  );
};