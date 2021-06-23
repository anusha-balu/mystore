import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  buttonroot: {
    transition:
      "background-color 800ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    "&:hover": {
      backgroundColor: yellow[700]
    }
  },
  menuButton: {
    marginRight: theme.spacing(2)
    // flexGrow : 1
  },
  title: {
    flexGrow: 1,
    flexDirection: "row"
  },
  colorPrimary: {
    // backgroundColor: "#ffd91c"
    backgroundColor: "transparent"
  }
}));

export default function Header(props) {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const anchorRef = React.useRef(null);
  const anchorRef1 = React.useRef(null);
  const prevOpen = React.useRef(open);
  const prevOpen1 = React.useRef(open1);
  const prevOpen2 = React.useRef(open2);
  const prevOpen3 = React.useRef(open3);
  console.log(
    "this is using autocomple configured in  mysnippet.code-snippets.js in C:Usersanusha.bAppDataRoamingCodeUsersnippetsmysnippet.code-snippets"
  );
  //BUG

  const classes = useStyles();

  const handleToggle = () => {
    setOpen(true);
  };

  const handleToggle1 = () => {
    setOpen1(true);
  };

  const handleToggle2 = () => {
    setOpen2(true);
  };
  const handleToggle3 = () => {
    setOpen3(true);
  };
  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  const handleClose1 = event => {
    if (anchorRef1.current && anchorRef1.current.contains(event.target)) {
      return;
    }
    setOpen1(false);
  };
  const handleEditor = event => {
    console.log("open ckeditor");
    props.setroutepath("ckeditor");
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // React.useEffect(() => {
  //   if (prevOpen.current === true && open === false) {
  //     anchorRef.current.focus();
  //   }
  //   prevOpen.current = open;
  // }, [open]);

  return (
    <AppBar
      classes={{ colorPrimary: classes.colorPrimary }}
      style={{ boxShadow: "none" }}
      position="static"
    >
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Welcome {props.fullName}
        </Typography>

        <div style={{ flexGrow: "1" }}>
          <Button
            classes={{ root: classes.buttonroot }}
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            About us
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>Our history</MenuItem>
                      <MenuItem onClick={handleClose}>Inspiration</MenuItem>
                      <MenuItem onClick={handleClose}>Objective</MenuItem>
                      <MenuItem onClick={handleEditor}>Write to us</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          <Button
            classes={{ root: classes.buttonroot }}
            ref={anchorRef1}
            aria-controls={open1 ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle1}
          >
            Our Products
          </Button>
          <Popper
            open={open1}
            anchorEl={anchorRef1.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose1}>
                    <MenuList
                      autoFocusItem={open1}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose1}>Herbs</MenuItem>
                      <MenuItem onClick={handleClose1}>Vegetable</MenuItem>
                      <MenuItem onClick={handleClose1}>Health mixes</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          {/*<Button
            classes={{ root: classes.buttonroot }}
            ref={anchorRef}
            aria-controls={open2 ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle2}
          >
            Getfit
          </Button>
          <Popper
            open={open2}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open2}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>With healthify </MenuItem>
                      <MenuItem onClick={handleClose}>With Symple</MenuItem>
                      <MenuItem onClick={handleClose}>With HealthTap</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          <Button
            classes={{ root: classes.buttonroot }}
            ref={anchorRef}
            aria-controls={open3 ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle3}
          >
            Rewards
          </Button>
          <Popper
            open={open3}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open3}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>Rewards Herbs</MenuItem>
                      <MenuItem onClick={handleClose}>
                        Rewards Vegetable
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        Rewards Health mixes
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper> */}
        </div>

        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
