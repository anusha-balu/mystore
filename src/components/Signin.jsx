import React, { useState } from "react";
import "./Signin.css";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
  inputlabel: {
    fontSize: 12,
    color: "grey"
  },
  inputcontent: {
    fontSize: 13,
    color: "grey"
  },
  mystorebutton: {
    margin: theme.spacing(1),
  },
  mystorefont: {
    fontFamily: 'Roboto, sans-serif',
    color:  "rgb(155, 113, 167)",
    fontSize: "14px"
  }
}));

export default function Signin(props) {
  const [flag, setflag] = useState(false);
  const classes = useStyles();

  const handleClick = (event) => {
    console.log("click",props.fullName)
    console.log("click",props.password)
    localStorage.setItem("currentuser", props.fullName)
    localStorage.setItem("password", props.password)
    console.log("localstorage has..",localStorage.getItem("currentuser"))
    props.updateshowleftsidebullets(true)
    // props.history.push("/home");
  };
  const handleLinkClick =() => {
  setflag(true)
  }
  const preventDefault = event => event.preventDefault();
  return (
    <div
      style={{
        margin: "50vh"
        // ,display: "flex", flexDirection: "column", justifyContent: "center",alignItems: "center"
      }}
    >
      {/* <div className="sample">hello anusha</div> */}
      <div className="signin-container">
      
        {!flag && (
          <Link href="#" onClick={handleLinkClick} color="inherit">
            Signin
          </Link>
        )}
        {flag && (
         
          <form className={classes.root} noValidate autoComplete="off">
            <Typography variant="h6" className={classes.mystorefont} color="primary">Login</Typography>
            <TextField
              id="standard-basic"
              label="Username"
              onChange={event => {
                props.updateFullName(event.target.value);
              }}
              InputLabelProps={{ classes: { root: classes.inputlabel } }}
              InputProps={{ classes: { root: classes.inputcontent } }}
            />
            <TextField
              id="standard-basic"
              label="Password"
              type="password"
              onChange={event => {
                props.updatePassword(event.target.value);
              }}
              InputLabelProps={{ classes: { root: classes.inputlabel } }}
              InputProps={{ classes: { root: classes.inputcontent } }}
            />
            {/* <ThemeProvider theme={theme}> */}
              <Button
                variant="contained"
                color="secondary"
                className={classes.mystorebutton}
                onClick = {handleClick}
              >
                Get in
              </Button>
            {/* </ThemeProvider> */}
          </form>
        )}
      </div>
    </div>
  );
}
