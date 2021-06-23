import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(error) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ backgroundColor: "alice" }}>something went wrong</div>
      );
    }
    return this.props.children;
  }
}
