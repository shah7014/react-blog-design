import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  const isLoggedIn = false;

  return (
    <ul className={`${classes.nav_list} ${props.className}`}>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/">ABOUT</Link>
      </li>
      <li>
        <Link to="/">CONTACT</Link>
      </li>
      <li>
        <Link to="/newpost">WRITE</Link>
      </li>
      {isLoggedIn && (
        <li>
          <Link to="/">LOGOUT</Link>
        </li>
      )}
    </ul>
  );
};

export default NavBar;
