import React, { Component } from "react";
import vending from "./vending.jpg";
import "./VendingMachine.css";

class VendingMachine extends Component {
  render() {
    return (
      <div>
        <h2>Hello I am a vending machine. What would you like to eat?</h2>
        <div
          className="VendingMachine"
          style={{ backgroundImage: `url(${vending})` }}
        />
      </div>
    );
  }
}

export default VendingMachine;
