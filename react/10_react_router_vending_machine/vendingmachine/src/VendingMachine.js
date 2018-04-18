import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Squid from "./Squid";
import Soda from "./Soda";
import "./VendingMachine.css";

const Home = () => (
  <div>
    <h1>Welcome to the Vending Machine</h1>
    <div>
      <ul>
        <li>
          <Link to="/Soda">Soda</Link>
        </li>
        <li>
          <Link to="/Squid">Squid</Link>
        </li>
      </ul>
    </div>
  </div>
);

class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <Route path="/" exact component={Home} />
        <Route path="/soda" exact component={Soda} />
        <Route path="/squid" exact component={Squid} />
      </div>
    );
  }
}

export default VendingMachine;
