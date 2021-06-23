import React from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";
import Card from "../FoodUI/Card";
import Cart from "../FoodCart/Cart";
const BackDrop = props => {
  return <div className={classes.backdrop} onClick={props.showPageHandler} />;
};

const Overlay = props => {
  return (
    <div
      className={classes.modal}
      // onClick={props.showPageHandler}
    >
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = props => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <BackDrop showPageHandler={props.showPageHandler}></BackDrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <Overlay showPageHandler={props.showPageHandler}>
          {props.children}
        </Overlay>,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};
export default Modal;
