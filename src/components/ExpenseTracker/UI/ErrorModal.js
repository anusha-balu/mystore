import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
const BackDrop = props => {
  return <div className={styles.backdrop} onClick={props.resetError} />;
};
const Overlay = props => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.resetError}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = props => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <BackDrop resetError={props.resetError}></BackDrop>,
        document.getElementById("backdrop-root")
      )}

      {ReactDom.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          resetError={props.resetError}
        ></Overlay>,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};
export default ErrorModal;
