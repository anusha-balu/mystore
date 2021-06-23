import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef
} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./Login.module.css";
import Input from "../UI/Input";
import AuthContext from "../../../context/auth-context";

const emailReducer = (state, action) => {
  //out of this parameter state is the last state, react guarantees this is the latest state
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "ON_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};
const passwordReducer = (state, action) => {
  //out of this parameter state is the last state, react guarantees this is the latest state
  if (action.type === "PWD_INPUT") {
    console.log("pwd_input..", action.val);
    return { value: action.val, isValid: action.val.length > 1 };
  }
  if (action.type === "ON_BLUR") {
    return { value: state.value, isValid: state.value.length > 1 };
  }
  return { value: "", isValid: false };
};
export default function Login(props) {
  const ctx = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  // const [enteredEmail, setenteredEmail] = useState("");//comment this sice we are managing both in reducer
  // const [emailValid, setemailValid] = useState();
  const [enteredPassword, setenteredPassword] = useState("");
  const [passwordValid, setpasswordValid] = useState();
  const [formValid, setformValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null
  });
  console.log("passwordState..", passwordState);
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  useEffect(() => {
    console.log("use effect running");
    //no need to run this for everykey stroke isntead we can wait if the user has paused typeing for that we set timeout of 500ms after whcih the validation runs
    const identifier = setTimeout(() => {
      console.log("validation ran");
      setformValid(
        emailState.isValid && passwordState.isValid
      ); /*for state udpae happens based on other state use useeffect
      for state update happening based on saem state use this format setvegan(prev => !prev)*/
      console.log(
        "cehcking validity",
        emailState.isValid && passwordState.isValid
      );
    }, 100);
    return () => {
      console.log("Cleanup");
      clearTimeout(identifier);
    };
    // this runs as a cleanup before the logic in useeffect runs, but not in first useeffect of first render
    //this is not run before the first useefect executions
    // }, [enteredEmail, enteredPassword]);
    // }, [emailState, passwordState]); //so instead of enteredEmail enteredPassword we use reducer state
  }, [emailIsValid, passwordIsValid]); //we are interested in the validity of the email and password, useffect to run only when the validity changes not everytime the email and password changes
  const emailChangeHandler = event => {
    // setenteredEmail(event.target.value);

    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    // setformValid(
    //   //moving this setformvalid too useeffect since this way of the setting  statevariable which is depending on other is not efficient as we are not sure about when passwordstate will be updated
    //   event.target.value.includes("@") &&
    //     event.target.value.includes(".com") &&
    //     passwordState.value.trim().length > 6
    // );
  };
  const passwordChangeHandler = event => {
    // setenteredPassword(event.target.value);
    dispatchPassword({ type: "PWD_INPUT", val: event.target.value });
    // setformValid(
    //   //moving this setformvalid too useeffect since this way of the setting  statevariable which is depending on other is not efficient as we are not sure about when emailstate will be updated
    //   emailState.value.includes("@") &&
    //     emailState.value.includes(".com") &&
    //     event.target.value.trim().length > 6
    // );
  };
  const validateEmailHandler = () => {
    // setemailValid(enteredEmail.includes("@"));
    // setemailValid(emailState.isValid);
    dispatchEmail({ type: "ON_BLUR" });
  };
  const validatePasswordHandler = () => {
    // setpasswordValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: "ON_BLUR" });
  };
  const submitHandler = e => {
    e.preventDefault();
    // props.onLogin(emailState.value, passwordState.value);
    if (formValid) ctx.onLogin(emailState.value, passwordState.value);
    else if (!emailIsValid) emailInputRef.current.focus();
    else passwordInputRef.current.focus();
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          emailState={emailState}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          label="Email"
          id="email"
          type="email"
        ></Input>
        {/* <div
          className={`${classes.control} ${
            // emailValid === false ? classes.invalid : ""
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label>Email</label>
          <input
            id="email"
            type="email"
            // value={enteredEmail}
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          ></input>
        </div> */}
        <Input
          ref={passwordInputRef}
          emailState={passwordState}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          label="Password"
          id="password"
          type="password"
        ></Input>
        {/* <div
          className={`${classes.control} ${
            // passwordValid === false ? classes.invalid : ""
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label>Password</label>
          <input
            id="password"
            type="password"
            // value={enteredPassword}
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          ></input>
        </div> */}
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            // disabled={!formValid}
          >
            Let me in
          </Button>
        </div>
      </form>
    </Card>
  );
}
