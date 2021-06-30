import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./CounterHeader.module.css";
import { authActions } from "../store/indexreduxtoolkit";
export default function CounterHeader() {
  const auth = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logoutHandler = e => {
    e.preventDefault();
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {auth && (
        <nav>
          <ul>
            <li>
              <a href="/">My product</a>
            </li>
            <li>
              <a href="/">My sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
