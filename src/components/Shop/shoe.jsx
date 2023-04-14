import React from "react";
import { PRODUCTS } from "../../product";
import { Product } from "./product";

import "./shoe.css";

export const Shoe = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1> Men & Women Shoe's</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
      <footer class="py-5 my-5 bg-dark">
      <h5>© 2023 SHOES4U, Inc. All Rights Reserved</h5>
      </footer>
    </div>
  );
};