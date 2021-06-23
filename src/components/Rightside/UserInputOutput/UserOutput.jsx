import React from "react";
import { width, textAlign } from "@material-ui/system";
const UserOutput = props => {
  return (
    <div
      style={{
        width: "60%",
        padding: "16px",
        margin: " 16px auto",
        borderRadius: "20px",

        border: "1px solid #eea",
        textAlign: "center",
        backgroundColor: "#cae"
      }}
    >
      <p>UserName: {props.name}</p>
      <p></p>
    </div>
  );
};
export default UserOutput;
