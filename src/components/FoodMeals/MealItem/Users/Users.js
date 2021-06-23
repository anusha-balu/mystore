import React, { useState, useEffect } from "react";
import User from "./User";
import classes from "./Users.module.css";
import Button from "../../../ExpenseTracker/UI/Button";

export default function Users(props) {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers(curState => !curState);
  };
  useEffect(() => {
    if (props.filteredUsers.length === 0) {
      throw new Error("no users provided");
    }
    console.log("length...", props.filteredUsers.length);
  }, [props.filteredUsers]);

  let usersList = (
    <ul>
      {props.filteredUsers.map(user => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );
  return (
    <div className={classes.users}>
      <Button onClick={toggleUsersHandler}>
        {showUsers ? "Hide" : "Show"} Users
      </Button>
      {showUsers && usersList}
    </div>
  );
}
