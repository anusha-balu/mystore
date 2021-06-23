import React, { useState, useEffect } from "react";

import classes from "./UserFinder.module.css";
import Users from "./Users";

export default function UserFinder() {
  const DUMMY_USERS = [
    { id: "u1", name: "Max" },
    { id: "u2", name: "Manuel" },
    { id: "u3", name: "Julie" }
  ];
  const [searchTerm, setSearchTerm] = useState();
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter(user =>
        user.name.toUpperCase().includes(searchTerm && searchTerm.toUpperCase())
      )
    );
    return () => {
      console.log("in cleanup1");
    };
  }, [searchTerm]);

  useEffect(() => {
    setFilteredUsers(DUMMY_USERS);
    return () => {
      console.log("in cleanup1");
    };
  }, []);

  const searchChangeHandler = event => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className={classes.finder}>
      <input type="search" onChange={searchChangeHandler}></input>
      <Users filteredUsers={filteredUsers}></Users>
    </div>
  );
}
