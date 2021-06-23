import React from "react";
import classes from "./LoginButton.module.css";
const LoginButton = props => {
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={false}
    >
      {props.children}
    </button>
  );
};
export default React.memo(LoginButton);
/*react memo is memorizing the function and usecallback ensures it is not a new object that is passed*/
