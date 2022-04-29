import React, { useState, useContext } from "react";
import "@styles/Header.scss";
import { Menu } from "@components/Menu";
import icon_menu from "@icons/icon_menu.svg";
import logo_yard from "@logos/logo_yard_sale.svg";
import icon_shopping_cart from "@icons/icon_shopping_cart.svg";
import { AppContext } from "@context/AppContext";

export const Header = () => {
  const [toogle, setToogle] = useState(false);
  const { state } = useContext(AppContext);

  const handleToogle = () => {
    setToogle(!toogle);
  };
  return (
    <nav>
      <img src={icon_menu} alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={logo_yard} alt="logo" className="nav-logo" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToogle}>
            hi@example.com
          </li>
          <li className="navbar-shopping-cart">
            <img src={icon_shopping_cart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toogle && <Menu />}
    </nav>
  );
};
