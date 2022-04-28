import React from "react";
import ProductInfo from "../components/ProductInfo";
import "../styles/ProductDetail.scss";

export const ProductDetail = () => {
  return (
    <aside className="ProductDetail">
      <div className="ProductDetail-close">
        <img src="./icons/icon_close.png" alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};
