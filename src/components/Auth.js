import React from "react";
import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/indexreduxtoolkit";

export default function Auth() {
  const auth = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const loginHandler = e => {
    e.preventDefault();
    dispatch(authActions.login());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email"></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password"></input>
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
}
