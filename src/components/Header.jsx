import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "@styles/Header.scss";
import { Menu } from "@components/Menu";
import logo_yard from "@logos/logo_yard_sale.svg";
import icon_shopping_cart from "@icons/icon_shopping_cart.svg";
import { AppContext } from "@context/AppContext";
import { MyOrder } from "@containers/MyOrder";
import { useGetCategory } from "@hooks/useGetCategory";
import { MovilMenu } from "@components/MovilMenu";
import { DesktopMenu } from "@components/DesktopMenu";

const API = process.env.API;

export const Header = () => {
  const categories = useGetCategory(`${API}categories`);
  const [toogle, setToogle] = useState(false);
  const [toogleMovilMenu, setToogleMovilMenu] = useState(false);
  const [toogleOrder, setToogleOrder] = useState(false);
  const { state, addCategories, addCategoryId } = useContext(AppContext);

  useEffect(() => {
    categories.length !== 0 && addCategories(categories);
  }, [categories]);

  const handleToogle = () => setToogle(!toogle);
  const handleToogleOrder = () => setToogleOrder(!toogleOrder);
  const handleClick = () => setToogleMovilMenu(!toogleMovilMenu);

  const setCategoryId = (id) => {
    addCategoryId(id);
    toogleMovilMenu && setToogleMovilMenu(!toogleMovilMenu);
  };

  return (
    <nav>
      <div
        className={`menu nav-icon1 ${toogleMovilMenu && "open"} `}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="menu-container">
        <img src={logo_yard} alt="logo" className="nav-logo" />

        <div className="navbar-rigth--movil">
          {toogleMovilMenu && (
            <MovilMenu
              categories={categories}
              fn={setCategoryId}
              toogle={handleToogle}
            />
          )}
        </div>

        <div className="navbar-left desk-menu">
          <DesktopMenu
            categories={categories}
            fn={setCategoryId}
            toogle={handleToogle}
          />
        </div>
      </div>
      <div className="navbar-right desk-menu">
        <ul>
          <li className="navbar-shopping-cart" onClick={handleToogleOrder}>
            <img src={icon_shopping_cart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toogle && <Menu hide={handleToogle} />}
      {toogleOrder && <MyOrder hide={handleToogleOrder} />}
    </nav>
  );
};
