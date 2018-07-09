import React from "react";
import { Link } from "react-router-dom";
import "./vendingMachine.css";

const AvocadoToast = () => (
  <div className="vending-container">
    <h1>Here is your avocado toast:</h1>
    <img
      className="vending-img"
      src="https://www.seriouseats.com/recipes/images/2016/05/20160502-avocado-toast-vicky-wasik-ricotta-14-1500x1125.jpg"
      alt="avocado toast"
    />
    <Link to="/">Back to the vending machine!</Link>
  </div>
);

export default AvocadoToast;
