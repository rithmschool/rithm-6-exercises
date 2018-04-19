import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Shark from './Shark';
import Soda from './Soda';
import Candy from './Candy';
// import './VendingMachine.css';

const HomePage = () => (
  <div>
    <h1>Vending Machine!</h1>
    <div>
      <ul>
        <li>
          <Link to="/Soda">Soda</Link>
        </li>
        <li>
          <Link to="/Candy">Candy</Link>
        </li>
        <li>
          <Link to="/Shark">Shark?</Link>
        </li>
      </ul>
    </div>
  </div>
);

class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <Route path="/" exact component={HomePage} />
        <Route path="/soda" exact component={Soda} />
        <Route path="/candy" exact component={Candy} />
        <Route path="/shark" exact component={Shark} />
      </div>
    );
  }
}

export default VendingMachine;
