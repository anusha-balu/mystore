import React, { useEffect } from "react";
import classes from "./Cockpit.module.css";
const Cockpit = props => {
  useEffect(() => {
    console.log("cockpit useeffect"); // this part of useeffect called on first rendering
    const timeout = setTimeout(() => {
      alert("saved data to cloud");
    }, 1000);
    return () => {
      clearTimeout(timeout);
      console.log("cockpit clean up"); //called on unmount, unmounting done in rightsidecategoryview by remove button
      //only this part is called on unmount. rest of the useeffect willnot be called on unmount
    };
  }, []);
  useEffect(() => {
    console.log("Cockpit 2nd useeffect"); //this part of useeffect called on every rendering
    return () => {
      console.log("Cockpit 2nd useeffect in return"); //executed before the component re-renders ie during update
    };
  });
  const clas = [];
  //   let btnClass = "";
  //   if (props.showPerson) {
  let btnClass = classes.Red;
  //   }
  console.log("Classes...", classes);
  console.log("Classes Red...", classes.Red);
  if (props.personsLength <= 1) {
    clas.push(classes.red);
  }
  if (props.personsLength <= 2) {
    clas.push(classes.bold);
  }
  return (
    <div className="cockpit">
      <button className={btnClass} onClick={() => props.toggleDisplay()}>
        toggle
      </button>
      <p className={clas.join(" ")}>This is really working</p>
    </div>
  );
};

export default Cockpit; //functional component only re-renders
//when there is change to props. so why shud cockpit be rerendered when there is change to persons
//since there is no display of person in cockpit. the only thing considered in length of persons
