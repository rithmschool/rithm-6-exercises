import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./VendingMachine.css";

const CrackerJacks = props => (
  <div>
    <img src="https://www.fritolay.com/images/default-source/blue-bag-image/cracker-jack-original.png?sfvrsn=7cfb573a_4" alt="cracker jacks" />
  </div>
);

const Falafel = props => (
  <div><img src="https://www.myjewishlearning.com/wp-content/uploads/2004/04/falafel-1-1599x900.jpg" alt="falafel" /></div>
);

const PitaChips = props => (
  <div><img src="https://thewoksoflife.com/wp-content/uploads/2017/01/pita-chips.jpg" alt="pita chips" /></div>
);

export default class VendingMachine extends Component {
  render() {
    return (
      <div>
        <p>
          <Link to="/crackerjacks">Select Cracker Jacks</Link>
        </p>
        <p>
          <Link to="/falafel">Select Falafel</Link>
        </p>
        <p>
          <Link to="/pitachips">Select Pita Chips</Link>
        </p>
        <Route path="/crackerjacks" component={CrackerJacks} />
        <Route path="/falafel" component={Falafel} />
        <Route path="/pitachips" component={PitaChips} />
      </div>
    );
  }
}
