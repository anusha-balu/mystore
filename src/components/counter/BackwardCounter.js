import React from "react";
import Card from "./Card";
import useCounter from "../../hooks/use-counter";

export default function BackwardCounter() {
  const counter = useCounter(false);
  return <Card>{counter}</Card>;
}
