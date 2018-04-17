import React, { Component } from "react";
import logo from "./logo.svg";
import "./VendingMachine.css";
import Kudos from "./Kudos";
import StreetFood from "./StreetFood";
import Surprise from "./Surprise";
import { Route, Link } from "react-router-dom";

class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <ul>
          <li>
            <Link to="/">Kudos</Link>
          </li>
          <li>
            <Link to="/streetfood">StreetFood</Link>
          </li>
          <li>
            <Link to="/surprise">Surprise</Link>
          </li>
        </ul>
        <Route exact path="/kudos" component={Kudos} />
        <Route path="/surprise" component={Surprise} />
        <Route path="/streetfood" component={StreetFood} />
      </div>
    );
  }
}

export default VendingMachine;
