import React from "react";
import mangoes from "./mangoes.jpg";
import "./VendingMachine.css";

const Mango = props => (
  <div>
    <h2>King of all fruits</h2>
    <h5>Mangoes Eaten: {props.visits}</h5>
    <div
      className="VendingMachine"
      style={{ backgroundImage: `url(${mangoes})` }}
    />
  </div>
);

export default Mango;
