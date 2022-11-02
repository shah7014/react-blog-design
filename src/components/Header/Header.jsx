import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerTitles}>
        <span className={classes.headingSm}>React Blog App</span>
        <span className={classes.headingLg}>BLOG</span>
      </div>
      <img
        className={classes.headerImg}
        src="https://images.unsplash.com/photo-1604715686140-d5bef96c8b9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
        alt="cover"
      />
    </header>
  );
};

export default Header;
