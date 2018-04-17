import React from "react";
import { Link } from "react-router-dom";
import "./vendingMachine.css";

const LaCroix = () => (
  <div className="vending-container">
    <h1>Here is your la croix:</h1>
    <img
      className="vending-img"
      src="https://i5.walmartimages.com/asr/d7de5483-f672-4237-8627-b45be8c94a08_2.d9a1c785d234ae0c4e202fcb9441d702.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
      alt="la croix"
    />
    <Link to="/">Back to the vending machine!</Link>
  </div>
);

export default LaCroix;
