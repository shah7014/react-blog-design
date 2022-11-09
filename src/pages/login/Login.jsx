import React from "react";
import { Link } from "react-router-dom";
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

        <Link to="/register" className="link">
          <button className={`${classes.register} ${classes.btn}`}>
            Register
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
