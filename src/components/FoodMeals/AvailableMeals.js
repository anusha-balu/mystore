import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../FoodUI/Card";
import MealItem from "./MealItem/MealItem";
import LoginButton from "../../components/ExpenseTracker/UI/LoginButton";

const AvailableMeals = props => {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      const mealsResponse = await fetch(
        "https://react-my-burger-44816-default-rtdb.firebaseio.com/meals.json"
      );
      if (!mealsResponse.ok) {
        throw new Error("Meals not loaded");
      }
      const mealsData = await mealsResponse.json();
      const loadedMeals = [];
      for (const key in mealsData) {
        loadedMeals.push({
          id: key,
          name: mealsData[key].name,
          description: mealsData[key].description,
          price: mealsData[key].price,
          veg: mealsData[key].veg
        });
      }
      console.log(loadedMeals);
      setLoadedMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch(error => {
      console.log("error", error.message);
      setError(error.message);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <section>...Loading</section>;
  }
  if (error) {
    return <section>{error}</section>;
  }
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.9,
      veg: false
    },
    {
      id: "m2",
      name: "Croissants",
      description: "Finest buns and smooth butter",
      price: 25.9,
      veg: true
    },
    {
      id: "m3",
      name: "Spagetti",
      description: "Finest noodles and pork",
      price: 30.9,
      veg: true
    },
    {
      id: "m4",
      name: "Bruschetta",
      description: "Finest noodles and pork",
      price: 30.9,
      veg: true
    }
  ];

  const mealsList = loadedMeals.map(
    meals =>
      meals.veg === props.veganPreference && (
        <MealItem key={meals.id} id={meals.id} meals={meals}>
          {meals.name}
        </MealItem>
      )
  );
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
        <LoginButton
          className={classes.button1}
          onClick={props.foodTypeSelectionHandler}
        >
          Do not allow selection
        </LoginButton>
      </Card>
    </section>
  );
};

export default React.memo(AvailableMeals);
