import React from "react";
import { fontFamily } from "@material-ui/system";

export default function Validation(props) {
  let validationMessage = "too short";
  if (props.pwd.length > 10) validationMessage = "too long";
  return (
    <div>
      <div
        style={{ fontFamily: "Arial, Helvetica, sans-serif", color: "#eac" }}
      >
        {validationMessage}
      </div>
      {/* {props.pwd.length < 6 ? (
        <div
          style={{ fontFamily: "Arial, Helvetica, sans-serif", color: "#eac" }}
        >
          validationMessage
        </div>
      ) : null} */}
    </div>
  );
}
