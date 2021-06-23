import React from "react";
import MovieItem from "./MovieItem";
import classes from "./MovieList.module.css";

export default function MovieList(props) {
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map(movie => (
        <MovieItem
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        ></MovieItem>
      ))}
    </ul>
  );
}
