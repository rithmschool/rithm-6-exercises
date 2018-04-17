import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

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
    <h1>VendingMachine! Woo!</h1>
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

const Fish = () => (
  <div>
    <p>Delicious fish</p>
    <Link to="/">Take me home</Link>
  </div>
);

const Squid = () => (
  <div>
    <p>Delicious squid</p>
    <Link to="/">Take me home</Link>
  </div>
);

const ManSquid = () => (
  <div>
    <p>Delicious manSquid</p>
    <Link to="/">Take me home</Link>
  </div>
);

export default VendingMachine;
