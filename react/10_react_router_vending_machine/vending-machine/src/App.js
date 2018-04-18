import React from 'react';
import './App.css';
import VendingMachine from './VendingMachine';
import { Route, Link } from 'react-router-dom';
import { Chips } from './Chips';
import { Cookies } from './Cookies';
import { Donuts } from './Donuts';

const App = () => (
  <div>
    <ul className="navList">
      <li>
        <Link to="/">Vending Machine</Link>
      </li>
      <li>
        <Link to="/chips">Chips</Link>
      </li>
      <li>
        <Link to="/cookies">Cookies</Link>
      </li>
      <li>
        <Link to="/donuts">Donuts</Link>
      </li>
    </ul>
    <Route exact path="/" component={VendingMachine} />
    <Route path="/chips" component={Chips} />
    <Route path="/cookies" component={Cookies} />
    <Route path="/donuts" component={Donuts} />
  </div>
);
export default App;
