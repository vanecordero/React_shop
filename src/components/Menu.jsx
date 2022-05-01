import React from "react";
import "@styles/Menu.scss";
import { Link } from "react-router-dom";

export const Menu = ({ hide }) => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <Link to="/" className="title" onClick={hide}>
            My orders
          </Link>
        </li>
        <li>
          <Link to="/" onClick={hide}>
            My account
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={hide}>
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};
