import React from "react";
import chips from "./chips.jpeg";
import "./VendingMachine.css";

const Chip = props => (
  <div>
    <h2>Never eat potato chips without first opening the packet</h2>
    <h5>Bags Eaten: {props.visits}</h5>
    <div
      className="VendingMachine"
      style={{ backgroundImage: `url(${chips})` }}
    />
  </div>
);

export default Chip;
