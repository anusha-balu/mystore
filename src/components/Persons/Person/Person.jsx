import React, { useEffect } from "react";
// import "../Common.css";
// import "./Person.css";
import styled from "styled-components";
import classes from "./Person.module.css";

export default function Person(props) {
  console.log("persons render");
  useEffect(() => {
    console.log("Person useeffect");
  });
  const rnd = Math.random();
  console.log("rnd..", rnd);
  // if (rnd < 0.03) throw new Error("some thing went wrong");
  return (
    // <div className="Person">
    <div className={classes.Person}>
      <div onClick={props.click}>
        {props.name} hobbies: {props.children}
      </div>
      <input
        type="text"
        onChange={props.onchange}
        value={props.name}
        style={{ width: "60%" }}
      />
    </div>
  );
}
