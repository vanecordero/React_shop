import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "@styles/Header.scss";
import { Menu } from "@components/Menu";
import icon_menu from "@icons/icon_menu.svg";
import logo_yard from "@logos/logo_yard_sale.svg";
import icon_shopping_cart from "@icons/icon_shopping_cart.svg";
import { AppContext } from "@context/AppContext";
import { MyOrder } from "@containers/MyOrder";
import { useGetCategory } from "@hooks/useGetCategory";

const API = process.env.API;

export const Header = () => {
  const categories = useGetCategory(`${API}categories`);
  const [toogle, setToogle] = useState(false);
  const [toogleOrder, setToogleOrder] = useState(false);
  const { state, addCategories, addCategoryId } = useContext(AppContext);

  useEffect(() => {
    categories.length !== 0 && addCategories(categories);
  }, [categories]);
  const handleToogle = () => setToogle(!toogle);
  const handleToogleOrder = () => setToogleOrder(!toogleOrder);
  const setCategoryId = (id) => addCategoryId(id);

  return (
    <nav>
      <img src={icon_menu} alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={logo_yard} alt="logo" className="nav-logo" />

        <ul>
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            {categories.map(({ name, id }) => (
              <Link
                key={`category_${id}`}
                to={`/category/${name}`}
                onClick={() => setCategoryId(id)}
              >
                {name}
              </Link>
            ))}
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToogle}>
            hi@example.com
          </li>
          <li className="navbar-shopping-cart" onClick={handleToogleOrder}>
            <img src={icon_shopping_cart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toogle && <Menu />}
      {toogleOrder && <MyOrder />}
    </nav>
  );
};
