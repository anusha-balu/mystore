import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EcoIcon from "@material-ui/icons/Eco";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "none",
    position: "relative"
    // margin: "60px"
  },
  mystorebulletstyle: {
    color: "#7f5e15"
  },
  donecolor: {
    color: "#d50000"
  }
});

export default function Leftside() {
  const classes = useStyles();

  return (
    <div>
      <List component="nav" className={classes.root} aria-label="contacts">
        <ListItem button>
          <ListItemIcon>
            <EcoIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.mystorebulletstyle }}
            primary="Malt powders"
          />
          <ListItemIcon>
            <DoneOutlineIcon classes={{ root: classes.donecolor }} />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EcoIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.mystorebulletstyle }}
            primary="Variety of millets"
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EcoIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.mystorebulletstyle }}
            primary="Home made treats"
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EcoIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.mystorebulletstyle }}
            primary="Organic herbs"
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EcoIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.mystorebulletstyle }}
            primary="Organic vegies"
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EcoIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.mystorebulletstyle }}
            primary="Home made chocolates"
          />
        </ListItem>
      </List>
     
    </div>
    
  );
}
