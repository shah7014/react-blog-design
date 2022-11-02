import React from "react";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <ul className={`${classes.nav_list} ${props.className}`}>
      <li>
        <a href="/">HOME</a>
      </li>
      <li>
        <a href="/">ABOUT</a>
      </li>
      <li>
        <a href="/">CONTACT</a>
      </li>
      <li>
        <a href="/">WRITE</a>
      </li>
      <li>
        <a href="/">LOGOUT</a>
      </li>
    </ul>
  );
};

export default NavBar;
