import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import ManSquid from './ManSquid';
import Fish from './Fish';
import Squid from './Squid';

class VendingMachine extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/fish" component={Fish} />
        <Route path="/squid" component={Squid} />
        <Route path="/manSquid" component={ManSquid} />
      </div>
    );
  }
}

const Home = () => (
  <div>
    <h1>Welcome To Aqua Cuisine</h1>
    <h2>World's Finest Maritime Fare</h2>
    <div>
      <p>Menu:</p>
      <ul>
        <li>
          <Link to="/fish">Fish</Link>
        </li>
        <li>
          <Link to="/squid">Squid</Link>
        </li>
        <li>
          <Link to="/manSquid">ManSquid</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default VendingMachine;
