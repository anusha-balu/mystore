import React, { useRef, useState } from "react";
import classes from "./CheckoutForm.module.css";

export default function CheckoutForm(props) {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postalcode: true,
    city: true
  });
  const refName = useRef();
  const refStreet = useRef();
  const refPostal = useRef();
  const refCity = useRef();
  const isEmpty = value => value.trim() === "";

  const hasFiveCharacters = value => value.trim().length === 5;

  const confirmHandler = e => {
    e.preventDefault();
    const enteredName = refName.current.value;
    const enteredStreet = refStreet.current.value;
    const enteredPostal = refPostal.current.value;
    const enteredCity = refCity.current.value;
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = !isEmpty(enteredPostal);
    const enteredCityIsValid = hasFiveCharacters(enteredCity);
    console.log("enteredCityIsValid...", enteredCityIsValid);
    console.log("enteredPostalIsValid...", enteredPostalIsValid);
    const formValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;
    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalcode: enteredPostalIsValid,
      city: enteredCityIsValid
    });
    if (!formValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity
    });
  };

  return (
    <form onSubmit={confirmHandler} className={classes.form}>
      <div
        className={`${classes.control} ${!formInputsValidity.name &&
          classes.invalid}`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={refName}></input>
        {!formInputsValidity.name && <p>Name is not valid</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={refStreet}></input>
        {!formInputsValidity.street && <p>Street is not valid</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal code</label>
        <input type="text" id="postal" ref={refPostal}></input>
        {!formInputsValidity.postalcode && <p>Postal code is not valid</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={refCity}></input>
        {!formInputsValidity.city && <p>City is not valid</p>}
      </div>
      <div className={classes.actions}>
        <button onClick={props.closeModal}>Cancel</button>
        <button>Submit</button>
      </div>
    </form>
  );
}
