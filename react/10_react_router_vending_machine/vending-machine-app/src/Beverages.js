import React from "react";
import { Link } from "react-router-dom";
import beverage from "./smoothie.png";
import "./Beverages.css";

const Beverages = props => (
  <div className="Beverages">
    <h1>Hi</h1>
    <div>
      <Link to="/">Go Back</Link>
    </div>
    <div
      className="beverage__pic"
      style={{ backgroundImage: `url(${beverage})` }}
    />
  </div>
);

export default Beverages;
