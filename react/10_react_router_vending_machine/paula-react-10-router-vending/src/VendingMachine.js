import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./vendingMachine.css";

export default class VendingMachine extends Component {
  render() {
    return (
      <section>
        <img
          className="background-img"
          src="https://adatitleiii.lexblogplatform.com/wp-content/uploads/sites/121/2017/07/iStock-533626149.jpg"
          alt="Vending Machine Background Image"
        />
        <section className="vending-container">
          <section className="vending-prompt-row">
            <h3>What would you like from the vending machine?</h3>
            <h3>Here are your options:</h3>
            <ul>
              <li>
                <Link to="/lacroix">La Croix</Link>
              </li>
              <li>
                <Link to="/pixiesticks">Pixie Sticks</Link>
              </li>
              <li>
                <Link to="/avocadotoast">Avocado Toast</Link>
              </li>
            </ul>
          </section>
        </section>
      </section>
    );
  }
}
