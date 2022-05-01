import React from "react";
import { Link } from "react-router-dom";
import "@styles/DesktopMenu.scss";

export const DesktopMenu = ({ categories, fn, toogle }) => {
  return (
    <>
      <ul>
        <li>
          <Link to="/" onClick={() => fn("")}>
            All
          </Link>
        </li>
        <li>
          {categories.map(({ name, id }) => (
            <Link
              key={`category_${id}`}
              to={`/category/${name}`}
              onClick={() => fn(id)}
            >
              {name}
            </Link>
          ))}
        </li>
      </ul>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={toogle}>
            hi@example.com
          </li>
        </ul>
      </div>
    </>
  );
};
