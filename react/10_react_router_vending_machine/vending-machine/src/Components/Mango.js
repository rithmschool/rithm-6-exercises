import React, { Component } from "react";
import mangoes from "./mangoes.jpg";
import "./VendingMachine.css";

class Mango extends Component {
  render() {
    return (
      <div>
        <h2>King of all fruits</h2>
        <h5>Mangoes Eaten:</h5>
        <div
          className="VendingMachine"
          style={{ backgroundImage: `url(${mangoes})` }}
        />
      </div>
    );
  }
}

export default Mango;
