import React from "react";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.container}>
      <span className={classes.title}>Login</span>

      <form className={classes.loginForm}>
        <label>Email</label>
        <input type="email" placeholder="Enter your email..." />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." />
        <button type="submit" className={classes.btn}>
          Login
        </button>
        <button type="submit" className={`${classes.register} ${classes.btn}`}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
