import React, { useState, useEffect } from "react";
const useCounter = (forwards = true) => {
  //forwards =true is the default value if no arg is passed
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (forwards) setCounter(prv => prv + 1);
      else setCounter(prv => prv - 1);
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return counter;
};
export default useCounter;
