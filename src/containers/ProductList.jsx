import React, { useRef, useEffect, useCallback } from "react";
import { ProductItem } from "@components/ProductItem";
import "@styles/ProductList.scss";
import { useGetProduct } from "@hooks/useGetProducts";
import useNearScreen from "@hooks/useNearScreen";
import debounce from "just-debounce-it";

const API = process.env.API;

export const ProductList = () => {
  const { products, setPage, loading } = useGetProduct(`${API}products`);
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const debounceHandleNExtPage = useCallback(
    debounce(() => setPage((prevPag) => prevPag + 1), 1000),
    []
  );

  useEffect(
    function () {
      console.log(isNearScreen);
      isNearScreen && debounceHandleNExtPage();
    },
    [isNearScreen, debounceHandleNExtPage]
  );

  return (
    <>
      {loading ? (
        "cargando"
      ) : (
        <>
          <section className="main-container">
            <div className="ProductList">
              {products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          </section>
          <div id="visor" ref={externalRef}></div>
        </>
      )}
    </>
  );
};
