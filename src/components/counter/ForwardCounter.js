import React from "react";
import Card from "./Card";
import useCounter from "../../hooks/use-counter";

export default function ForwardCounter() {
  const counter = useCounter(); //if nothign is passed then its considered the defualt value [true] is considered

  return <Card>{counter}</Card>;
}
