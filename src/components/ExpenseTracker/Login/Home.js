import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./Home.module.css";
export default function Home(props) {
  return (
    <Card className={classes.home}>
      <h2>Welcome back</h2>
      <Button onClick={props.onLogout}>Logout</Button>
    </Card>
  );
}
