import React from "react";
import SideBar from "../../components/SIdeBar/SideBar";
import classes from "./Settings.module.css";
import { IoMdContact } from "react-icons/io";

const Settings = () => {
  return (
    <div className={classes.container}>
      <div className={classes.account}>
        <span className={classes.title}>Update Your Account</span>
        <span className={classes.delete}>Delete Account</span>

        <form className={classes.accountForm}>
          <div className={classes.control}>
            <label className={classes.label}>Profile Picture</label>
            <div className={classes.imgInput}>
              <img
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                alt=""
                className={classes.img}
              />
              <label htmlFor="pic-upload" className={classes.picLabel}>
                <IoMdContact className={classes.picIcon} />
              </label>
              <input type="file" style={{ display: "none" }} id="pic-upload" />
            </div>
          </div>

          <div className={classes.control}>
            <label className={classes.label} htmlFor="name">
              Username
            </label>
            <input id="name" className={classes.input} placeholder="romil" />
          </div>

          <div className={classes.control}>
            <label className={classes.label} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className={classes.input}
              type="email"
              placeholder="romil@email.com"
            />
          </div>

          <div className={classes.control}>
            <label className={classes.label} htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className={classes.input}
              type="password"
              placeholder="password"
            />
          </div>

          <div className={classes.action}>
            <button className={classes.btn}>Update</button>
          </div>
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Settings;
