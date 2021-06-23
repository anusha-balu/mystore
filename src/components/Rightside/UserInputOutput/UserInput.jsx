import React from "react";
const UserInput = props => {
  return (
    <input
      type="text"
      style={{ border: "2px solid red" }}
      onChange={props.handler}
      value={props.currentName}
    ></input>
  );
};
export default UserInput;
