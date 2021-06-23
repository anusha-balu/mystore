import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends React.Component {
  state = {
    ingrdients: {
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0
    }
  };
  render() {
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingrdients}></Burger>
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
