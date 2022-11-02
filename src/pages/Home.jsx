import React from "react";
import classes from "./Home.module.css";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className={classes.container}>
        <div className={classes.posts}>hi</div>
        <div className={classes.sideBar}>hello</div>
      </div>
    </div>
  );
};

export default Home;
