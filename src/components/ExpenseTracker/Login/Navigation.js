import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import Button from "../UI/Button";
import LoginButton from "../UI/LoginButton";
import AuthContext from "../../../context/auth-context";
export default function Navigation(props) {
  const ctx = useContext(AuthContext);
  console.log("ctx..", ctx);
  return (
    // <AuthContext.Consumer>
    //   {ctx => {
    //     return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {/* {props.isLoggedIn && ( */}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <LoginButton onClick={ctx.onLogout}>Logout</LoginButton>
          </li>
        )}
      </ul>
    </nav>
  );
  //     }}
  //   </AuthContext.Consumer>
  // );
}
