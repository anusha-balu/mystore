import React, { Component } from "react";

export default class FitnessIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fitness: [
        { bmi: 15, height: 20 },
        { bmi: 25, height: 50 },
        { bmi: 35, height: 30 }
      ]
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "nextprops",
      nextProps,
      "  nextstate  ",
      nextState,
      "  this.props.name ",
      this.props.name
    );
    console.log("shouldcomponentupdate");
    // if (nextProps.name != nextState.name) {
    //   console.log("true condn");

    // }
    //should return true for rerender of fitnessindicator. decides if component shuld rerender
    // else return false;
    if (nextProps.name !== this.props.name) return true;
    else return false;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("after update of [fitnessindicator]");
  }

  render() {
    console.log("[fitness indicator.js] render]");
    return (
      <div>
        <h1>Fitness of: {this.props.name}</h1>
        <h2>{this.state.fitness[0].bmi}</h2>
      </div>
    );
  }

  componentDidMount() {
    console.log("[fitnessindicator.js] componentdidmount"); //executes  after first render will not execute on every rerender
  }
  componentWillUnmount() {
    console.log("[fitness] componentwillunmount"); //write code here for executing right before the removing component or unmounted
  }
}
