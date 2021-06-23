import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ProductCard from "../ProductCard/ProductCard";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
// import tileData from './tileData';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "23vw",
    paddingTop: "5px",
    "&:hover": {
      boxShadow: "0px 2px 10px 5px rgba(0,0,0,0.2)"
      // background: "#f69d3c",
    }
  },
  media: {
    height: 100
  },
  cardactionroot: {
    padding: "0px"
  },
  cardcontentroot: {
    padding: "5px"
  },
  gridListroot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "normal",
    // overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    // flexWrap: 'nowrap',
    width: "65vw",
    height: 586,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(255, 193, 7, 0.33) 0%, rgba(255, 193, 7, 0.24) 70%, #ffffff00 100%)"
  },
  icon: {
    color: "white"
  },
  tileroot: {
    width: "25% !important",
    height: "204px !important",
    padding: "2px !important"
  }
}));

const tileData = [
  {
    img: "/tur1.jpg",
    title: "Image",
    author: "author",
    featured: false
  },
  {
    img: "/coriander.jpg",
    title: "Image",
    author: "author",
    featured: false
  },
  {
    img: "/beet-malt.jpg",
    title: "Image",
    author: "author",
    featured: false
  },
  {
    img: "/ragi-malt.jpg",
    title: "Image",
    author: "author",
    featured: false
  },
  {
    img: "/cinnamon-rolls.jpg",
    title: "Image",
    author: "author",
    featured: false
  },
  {
    img: "/muffins.jpg",
    title: "Image",
    author: "author",
    featured: false
  },
  {
    img: "/smoothie.jpg",
    title: "Image",
    author: "author",
    featured: false
  },
  {
    img: "/cinnamon-roll.jpg",
    title: "Image",
    author: "author",
    featured: false
  },
  {
    img: "/donut.jpg",
    title: "Image",
    author: "author",
    featured: false
  }
];

export default function Rightside() {
  const classes = useStyles();
  return (
    <div className={classes.gridListroot}>
      <GridList cellHeight={200} spacing={4} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile
            classes={{ root: classes.tileroot }}
            key={tile.img}
            cols={tile.featured ? 1 : 1}
            rows={tile.featured ? 1 : 1}
          >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton
                  aria-label={`star ${tile.title}`}
                  className={classes.icon}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>

    
  );
}
