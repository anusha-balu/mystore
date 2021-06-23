import React, { useMemo } from "react";
import Card from "../../FoodUI/Card";
import classes from "./Orders.module.css";

const Orders = props => {
  const { orders } = props;
  const sortedList = useMemo(() => props.orders.sort((a, b) => a - b), [
    orders
  ]);
  return (
    <section className={classes.meals}>
      <Card>
        <h2>Orders to serve</h2>
        <ul>
          {sortedList.map(order => (
            <li key={order}>{order}</li>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default React.memo(Orders);
