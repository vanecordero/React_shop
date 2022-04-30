import React, { useContext } from "react";
import "@styles/OrderItem.scss";
import icon_close from "@icons/icon_close.png";
import empty from "@icons/green_ferniture.png";
import { AppContext } from "@context/AppContext";

export const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleClick = (product) => removeFromCart(product);

  return (
    <div className="OrderItem">
      <figure>
        <img
          src={product.images.length !== 0 ? product.images[0] : empty}
          alt={product.title}
        />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img src={icon_close} alt="close" onClick={() => handleClick(product)} />
    </div>
  );
};
