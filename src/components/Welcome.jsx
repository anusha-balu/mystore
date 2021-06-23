import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Signin from "./Signin";
import "./Welcome.css";
import Leftside from "./Leftside";
import Header from "./Header/Header";
import Rightside from "./Rightside/Rightside";
import Link from "@material-ui/core/Link";
import Rightsidecategoryview from "./Rightside/Rightsidecategoryview/Rightsidecategoryview";

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1
    height: "inherit"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function Welcome(props) {
  const classes = useStyles();
  const [fullName, updateFullName] = useState("Anusha");
  const [gridview, updategridview] = useState(false);
  const [categoryview, updatecategoryview] = useState(true);
  const [password, updatePassword] = useState("");
  const [showleftsidebullets, updateshowleftsidebullets] = useState(true);
  const preventDefault = event => event.preventDefault();
  const [routepath, setroutepath] = useState("");
  console.log("routepath.....", routepath);
  console.log("showleftsidebullets....", showleftsidebullets);
  return (
    <div>
      <Grid
        container
        style={{
          paddingTop: "10px",
          height: "100vh",
          backgroundColor: "rgb(229, 208, 236)"
        }}
      >
        <Grid
          style={{
            width: "50vw",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center"
          }}
          item
          xs={4}
          md={4}
          // style={{ alignItems: showleftsidebullets ? "start" : "center" }}
        >
          <div className="login-container">
            {/* {showleftsidebullets && (
              <Signin
                {...props}
                updateFullName={updateFullName}
                fullName={fullName}
                password={password}
                updatePassword={updatePassword}
                updateshowleftsidebullets={updateshowleftsidebullets}
              />
            )} */}
            <div className="gallery">
              {/* <a target="_blank" href="img_5terre.jpg"> */}
              {/* <img
                // src="/leaf.jpg"
                // alt="Cinque Terre"
                width="600"
                height="400"
              /> */}
              {/* </a> */}
            </div>
            <div className="desc">Organic store</div>
            {showleftsidebullets && <Leftside></Leftside>}

            <div
              style={{
                left: "-6vw",
                top: "7vw",
                alignItems: "start",
                position: "relative"
              }}
            >
              <Link href="#" onClick={event => updategridview(true)}>
                Products Grid view
              </Link>
              {" | "}
              <Link href="#" onClick={event => updatecategoryview(true)}>
                Category view
              </Link>
            </div>
          </div>
        </Grid>
        <Grid
          className="login-container1"
          direction="column"
          item
          xs={8}
          md={8}
        >
          {/* <Grid
            container
            direction="column"
            justify="space-evenly"
            alignItems="center"
          > */}
          <Grid item>
            <Header fullName={fullName} setroutepath={setroutepath}></Header>
          </Grid>
          <Grid item style={{ padding: "10px" }}>
            {gridview && <Rightside></Rightside>}
            {categoryview && (
              <Rightsidecategoryview {...props}></Rightsidecategoryview>
            )}
          </Grid>
          {/* <Grid item>adcard3</Grid> */}
          {/* </Grid> */}
        </Grid>
      </Grid>
    </div>
  );
}
