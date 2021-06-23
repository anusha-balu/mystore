import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import "./AddUsers.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../../Helpers/Wrapper";

export default function AddUsers(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setisValid] = useState(true);
  const [error, setError] = useState();
  const inputNameref = useRef();
  const inputAgeref = useRef();

  const userNameChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setisValid(true);
    }
    setEnteredUsername(event.target.value);
    console.log(event.target.value);
  };
  const ageChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setisValid(true);
    }
    setEnteredAge(event.target.value);
    console.log(event.target.value);
  };

  const addUserHandler = event => {
    event.preventDefault();
    const usernameref = inputNameref.current.value;
    const ageref = inputAgeref.current.value;
    if (usernameref.trim().length === 0 || ageref.trim().length === 0) {
      setisValid(false);
      setError({
        title: "Invalid input",
        message: "Please add a valid name and age."
      });
      return;
    }
    if (+ageref < 1) {
      setisValid(false);
      setError({
        title: "Invalid input",
        message: "Please add a valid age."
      });
      return;
    }
    props.onAddUser(usernameref, ageref);
    inputNameref.current.value = "";
    inputAgeref.current.value = "";
    // setEnteredUsername("");when using useref no need of this
    // setEnteredAge("");when using useref no need of this
  };
  const resetErrorHandler = () => {
    setError(null);
    setisValid(true);
  };
  return (
    // <Wrapper>
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          resetError={resetErrorHandler}
        ></ErrorModal>
      )}
      <Card
        // className={`${styles.input} ${!isValid ? styles.invalid : ""}`}
        className={`input ${!isValid ? "invalid" : ""}`}
      >
        <form onSubmit={addUserHandler}>
          <label>Name</label>
          <input
            type="text"
            id="username"
            // onChange={userNameChangeHandler} when using useref no need of this
            // value={enteredUsername}when using useref no need of this
            ref={inputNameref}
          ></input>
          <label>Age</label>
          <input
            type="number"
            id="age"
            // onChange={ageChangeHandler}when using useref no need of this
            // value={enteredAge}when using useref no need of this
            ref={inputAgeref}
          ></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
      {/* </Wrapper> wrapper of React.Fragment is fine. we can use either of these */}
    </React.Fragment>
  );
}
