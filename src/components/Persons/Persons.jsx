import React, { useEffect } from "react";
import Person from "./Person/Person";
const Persons = props => {
  console.log("persons render");
  useEffect(() => {
    console.log("Persons useeffect");
  });
  const p = props.persons.map((data, index) => {
    return (
      <Person
        // click={switchNamHandlerwithoutargument}
        click={() => props.deleteindex(index)}
        name={data.name}
        age={data.age}
        key={data.id}
        onchange={event => props.nameChangeHandler(event, data.id)}
      />
    );
  });
  return <div>{p}</div>;
};
export default Persons;
