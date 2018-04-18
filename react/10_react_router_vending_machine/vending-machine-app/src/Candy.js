import React from "react";
import { Link } from "react-router-dom";

const Candy = props => (
  <div className="Candy">
    <h1>Yum Yum Candy</h1>
    <div>
      <Link to="/">Go Back</Link>
    </div>
    <div>I love candy</div>
  </div>
);

export default Candy;
