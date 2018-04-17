import React from "react";
import { Link } from "react-router-dom";
import "./vendingMachine.css";

const PixieSticks = () => (
  <div className="vending-container">
    <h1>Here are your pixie sticks:</h1>
    <img
      className="vending-img"
      src="https://i0.wp.com/denverelectroniccigarettes.com/wp-content/uploads/2017/12/4df5407de0b123400d92dba9f0f353bbb96024c8.jpg"
      alt="pixie sticks"
    />
    <Link to="/">Back to the vending machine!</Link>
  </div>
);

export default PixieSticks;
