import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

// const CandyPage = () => {
//   return <Candy />;
// };
// const ProteinPage = () => {
//   return <Protein />;
// };

const VendingMachine = props => (
  <div className="background__vending">
    <nav className="nav__vending">
      <div>
        <Link to="/beverages" className="linkto__items">
          Bevies
        </Link>
      </div>
      <div>
        <Link to="/candy" className="linkto__items">
          Candy Fo'Shandy
        </Link>
      </div>
      <div>
        <Link to="/protein" className="linkto__items">
          Protein Power
        </Link>
      </div>
    </nav>
  </div>
);

export default VendingMachine;
