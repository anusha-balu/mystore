import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./Commonlayout.css";
import Menubar from "../Menubar/Menubar";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: "100vh"
  }
}));

export default function Commonlayout(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        style={{
          paddingTop: "10px",
          backgroundColor: "rgb(229, 208, 236)",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <Grid
          style={{
            // padding: "10px",
            // width: "50vw",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center"
          }}
          item
          xs={4}
          md={11}
        >
          <div className="layout-container">
            <Menubar></Menubar>
          </div>
        </Grid>

        {/* <Grid
          className="login-container1"
          direction="column"
          item
          xs={8}
          md={8}
        >
          
        </Grid> */}
      </Grid>
    </div>
  );
}
