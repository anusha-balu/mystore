import React from "react";
import classes from "./MealsSummary.module.css";

export default function MealsSummary() {
  return (
    <section className={classes.summary}>
      <h2>Delicious food delivered to you</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy lunch or dinner at home
      </p>
      <p>
        All healthy meals at you door step, just-in-time and experienced chefs!
      </p>
    </section>
  );
}
