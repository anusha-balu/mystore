import React from "react";
import classes from "./TaskItem.module.css";

export default function TaskItem(props) {
  return (
    <li className={classes.task} key={props.task.id}>
      {props.task.text}
    </li>
  );
}
