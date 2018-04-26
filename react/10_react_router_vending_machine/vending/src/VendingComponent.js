import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './vending-machine.css';
import BossCoffee from './BossCoffee.js';
import CocaCola from './CocaCola.js';
import cclemon from './cclemon.js';

class Home extends Component {
  render() {
    return (
      <div className="centered">
        <ul className="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/coffee">Boss Coffee</Link>
          </li>
          <li>
            <Link to="/coca-cola">Coca Cola</Link>
          </li>
          <li>
            <Link to="/ccLemon">C.C. Lemon</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default class Vending extends Component {
  render() {
    return (
      <div>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/coffee" exact component={BossCoffee} />
          <Route path="/coca-cola" exact component={CocaCola} />
          <Route path="/cclemon" exact component={cclemon} />
        </div>
      </div>
    );
  }
}
