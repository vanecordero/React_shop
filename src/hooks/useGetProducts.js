import { useEffect, useState } from "react";
import { getProduct } from "../services/getProducts";

const INITIAL_PAGE = 0;

export const useGetProduct = (API) => {
  const [products, setProduts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(INITIAL_PAGE);
  let limit = 15;

  useEffect(() => {
    if (page === 0) {
      setLoading(true);
      getProduct(API, limit, page).then((data) => {
        setProduts(data);
        setLoading(false);
      });
    }
  }, []);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    getProduct(API, limit, page).then((data) =>
      setProduts((prevProdu) => prevProdu.concat(data))
    );
  }, [page]);

  return { products, setPage, loading };
};
