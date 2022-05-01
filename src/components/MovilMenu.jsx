import React from "react";
import "@styles/MovilMenu.scss";
import { Link } from "react-router-dom";

export const MovilMenu = ({ categories, fn, toogle }) => {
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
        <hr />
        <li>
          <Link to="/" onClick={() => fn("")}>
            My account
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={() => fn("")}>
            Sign out
          </Link>
        </li>
      </ul>
    </>
  );
};
