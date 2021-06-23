import React, { useRef } from "react";
import classes from "./AddMovie.module.css";

export default function AddMovie(props) {
  const openingcrawlRef = useRef("");
  const releasedateRef = useRef("");
  const titleRef = useRef("");

  const addMovieHandler = event => {
    event.preventDefault();

    const movie = {
      title: titleRef.current.value,
      opening_crawl: openingcrawlRef.current.value,
      release_date: releasedateRef.current.value
    };
    console.log("here..", movie);

    props.addMovie(movie);
  };
  return (
    <form onSubmit={addMovieHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="openingcrawl">Opening Crawl</label>
        <textarea rows="5" id="openingcrawl" ref={openingcrawlRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input type="date" id="releasedate" ref={releasedateRef}></input>
      </div>
      <button type="submit">Add</button>
    </form>
  );
}
