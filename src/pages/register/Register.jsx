import React from "react";
import classes from "./Register.module.css";

const Register = () => {
  return (
    <div className={classes.container}>
      <span className={classes.title}>Register</span>

      <form className={classes.registerForm}>
        <label>Username</label>
        <input type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input type="email" placeholder="Enter your email..." />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." />
        <button type="submit" className={classes.btn}>
          Register
        </button>
        <button type="submit" className={`${classes.loginBtn} ${classes.btn}`}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Register;
