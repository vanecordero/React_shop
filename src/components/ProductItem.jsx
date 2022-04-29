import React, { useState } from "react";
import "@styles/ProductItem.scss";
import bt_add_to_cart from "@icons/bt_add_to_cart.svg";
import empty from "@icons/green_ferniture.png";

export const ProductItem = ({ product }) => {
  const [cart, setCart] = useState([]);
  const handleClick = () => setCart([]);
  return (
    <div className="ProductItem">
      <img
        src={product.images.length !== 0 ? product.images[0] : empty}
        alt={product.title}
      />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handleClick}>
          <img src={bt_add_to_cart} alt="" />
        </figure>
      </div>
    </div>
  );
};
