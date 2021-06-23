import React, { Component } from "react";
import image from "../../assets/something-went-wrong.png";

export default class Errorboundary extends Component {
  state = {
    hasError: false,
    errorMessage: ""
  };
  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: "website broken" });
  };
  render() {
    if (this.state.hasError == true) {
      return (
        <div>
          <p>
            {" "}
            <img
              src={image}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100vw",
                height: "100vh"
              }}
            />
            {this.state.errorMessage}
          </p>
        </div>
      );
    } else return this.props.children;
  }
}
