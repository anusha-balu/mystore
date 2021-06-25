import React from "react";
import classes from "./CounterHeader.module.css";

export default function CounterHeader() {
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My product</a>
          </li>
          <li>
            <a href="/">My sales</a>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
