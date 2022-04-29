import { useEffect, useState } from "react";
import axios from "axios";

export const useGetProduct = (API) => {
  const [products, setProduts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios(API);
      setProduts(response.data);
    }
    fetchData();
  }, []);

  return products;
};
