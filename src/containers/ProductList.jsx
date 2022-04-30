import React from "react";
import { ProductItem } from "@components/ProductItem";
import "@styles/ProductList.scss";
import { useGetProduct } from "../hooks/useGetProducts";

const API = process.env.API;

export const ProductList = () => {
  const products = useGetProduct(`${API}products`);

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
