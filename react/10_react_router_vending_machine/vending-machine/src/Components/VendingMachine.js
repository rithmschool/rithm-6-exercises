// "Hello I am a vending machine. What would you like to eat?"

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Chip from "./Chip";
import Mango from "./Mango";
import Soda from "./Soda";
import vending from "./vending.jpg";
import "./VendingMachine.css";

class VendingMachine extends Component {
  render() {
    return (
      <div>
        <p>Hello I am a vending machine. What would you like to eat?</p>
        <Chip />
        <br />
        <Mango />
        <br />
        <Soda />
        <br />
      </div>
    );
  }
}

export default VendingMachine;
