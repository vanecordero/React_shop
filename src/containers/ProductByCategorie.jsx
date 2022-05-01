import React, { useState, useContext, useEffect } from "react";
import { ProductItem } from "@components/ProductItem";
import "@styles/ProductList.scss";
import { AppContext } from "@context/AppContext";
import axios from "axios";
import { useParams } from "react-router-dom";

const API = process.env.API;

export const ProductByCategory = () => {
  const { state, addCategoryId } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  let params = useParams();

  useEffect(() => {
    if (state.categoryIdFilter !== "") {
      async function fetchData() {
        const response = await axios(
          `${API}categories/${state.categoryIdFilter}/products`
        );
        setProducts(response.data);
      }
      fetchData();
    } else {
      addCategoryId(
        state.categories
          .filter((categ) => categ.name === params.category)
          .map((ele) => ele.id)
          .join()
      );
    }
  }, [state.categories, state.categoryIdFilter]);

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
