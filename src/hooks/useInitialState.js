import { useState } from "react";

const initialState = {
  cart: [],
  categories: [],
  categoryIdFilter: "",
};
export const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };
  const addCategories = (payload) => {
    setState({
      ...state,
      categories: payload,
    });
  };
  const addCategoryId = (payload) => {
    setState({
      ...state,
      categoryIdFilter: payload,
    });
  };
  return {
    state,
    addToCart,
    removeFromCart,
    addCategories,
    addCategoryId,
  };
};
