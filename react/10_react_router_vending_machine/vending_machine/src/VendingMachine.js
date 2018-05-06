import React, { Component } from "react";
import "./VendingMachine.css";
import Kudos from "./Kudos";
import StreetFood from "./StreetFood";
import Surprise from "./Surprise";
import Machine from "./Machine";
import { Route, Link } from "react-router-dom";

class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <Route exact path="/" component={Machine} />
        <h2>Choose Wisely</h2>
        <Route path="/kudos" component={Kudos} />
        <Route path="/surprise" component={Surprise} />
        <Route path="/streetfood" component={StreetFood} />
      </div>
    );
  }
}

export default VendingMachine;
