import React, { Component, useEffect } from "react";
import classes from "./User.module.css";

// class User extends Component {
//   render() {
//     return <li className={classes.user}>{this.props.name}</li>;
//   }
// }
export default function User(props) {
  // useEffect(() => {
  //   console.log("useeffect in users");
  //   return () => {
  //     console.log(" user unmounting");
  //   };
  // }, []);
  return <li className={classes.user}>{props.name}</li>;
}
// export default User;
