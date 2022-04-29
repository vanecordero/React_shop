import React from "react";
import ProductInfo from "@components/ProductInfo";
import "@styles/ProductDetail.scss";
import icon_close from "./icons/icon_close.png";

export const ProductDetail = () => {
  return (
    <aside className="ProductDetail">
      <div className="ProductDetail-close">
        <img src={icon_close} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};
