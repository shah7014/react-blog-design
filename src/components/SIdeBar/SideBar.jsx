import React from "react";
import classes from "./SideBar.module.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

import { FaPinterestSquare } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className={classes.sideBar}>
      <div className={classes.sideBarItem}>
        <span className={classes.title}>about me</span>
        <img
          className={classes.img}
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <p className={classes.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, vitae?
          Necessitatibus, recusandae corporis quibusdam sint ullam dolores
        </p>
      </div>

      <div className={classes.sideBarItem}>
        <span className={classes.title}>categories</span>
        <ul className={classes.list}>
          <li className={classes.item}>Life</li>
          <li className={classes.item}>Music</li>
          <li className={classes.item}>Sport</li>
          <li className={classes.item}>Style</li>
          <li className={classes.item}>Tech</li>
          <li className={classes.item}>Cinema</li>
        </ul>
      </div>

      <div className={classes.sideBarItem}>
        <span className={classes.title}>follow us</span>
        <div className={classes.icons}>
          <AiFillFacebook className={classes.icon} />
          <AiFillInstagram className={classes.icon} />
          <FaPinterestSquare className={classes.icon} />
          <AiFillTwitterSquare className={classes.icon} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
