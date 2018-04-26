import React from "react";
import { Link } from "react-router-dom";

const Protein = props => (
  <div className="Protein">
    <h1>PROTEIN FOR DAYZ</h1>
    <div>
      <Link to="/">Go Back</Link>
    </div>
    <div>
      <img
        src="http://www.eatthis.com/wp-content/uploads/media/images/ext/172611284/protein-powder-BSN-syntha6-500x366.jpg"
        alt=""
      />
    </div>
  </div>
);

export default Protein;
