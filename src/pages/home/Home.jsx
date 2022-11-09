import React from "react";
import classes from "./Home.module.css";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SIdeBar/SideBar";
import PostsList from "../../components/Posts/PostsList";

const Home = () => {
  return (
    <div>
      <Header />
      <div className={classes.container}>
        <PostsList />
        <SideBar />
      </div>
    </div>
  );
};

export default Home;
