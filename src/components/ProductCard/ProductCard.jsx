import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    // maxWidth: "23vw",
    paddingTop: "5px"
    // "&:hover": {
    //   boxShadow: "0px 2px 10px 5px rgba(0,0,0,0.2)",
    //     // background: "#f69d3c",
    // },
  },
  media: {
    // height: "70px",
    // height: "130px",
  },
  cardactionroot: {
    padding: "0px"
  },
  cardcontentroot: {
    padding: "10px"
  }
});

export default function ProductCard(props) {
  const classes = useStyles();
  const [heightstyle, setheightstyle] = useState(props.height);
  console.log("heightstyle...", heightstyle);
  const traverse = event => {
    console.log("yay");
    props.history.push("/home");
  };
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title="Contemplative Reptile"
            style={{ height: props.height == 130 ? 130 : 70 }}
          />
          <CardContent classes={{ root: classes.cardcontentroot }}>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              style={{ textAlign: "center" }}
            >
              {props.title}
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p">
              Turmeric is medicinal herb that boost immunity
            </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardActions
          classes={{ root: classes.cardactionroot }}
          style={{ justifyContent: "center" }}
        >
          <Button size="small" color="primary" onClick={traverse}>
            More>>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
