import axios from "axios";

export const getProduct = async (API, limit, page) => {
  const response = await axios(`${API}?limit=${limit}&offset=${page * limit}`);
  return response.data;
};
