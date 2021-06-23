import React from "react";
import classes from "./MovieItem.module.css";

export default function MovieItem(props) {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
  );
}
