import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

class VendingMachine extends Component {
  render() {
    return <div className="App" />;
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

const Instructor = props => {
  const { school, name } = props.match.params;
  return (
    <h1>
      Hi my name is {name} and I am an instructor at {school}!
    </h1>
  );
};

export default VendingMachine;
