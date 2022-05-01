import { useEffect, useState } from "react";
import axios from "axios";

export const useGetCategory = (URL) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(URL);
      setCategories(response.data);
    }
    fetchData();
  }, []);
  return categories;
};
