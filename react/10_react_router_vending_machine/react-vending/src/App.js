import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Link } from "react-router-dom";
import "./App.css";

const Home = () => (
  <div>
    <h1>Welcome to vending machine!!!</h1>
    <div>
      <p>Check out some crap in vending machine:</p>
      <ul>
        <li>
          <Link to="/pizza">Eat Pizza</Link>
        </li>
        <li>
          <Link to="/soda">Drink Soda</Link>
        </li>
        <li>
          <Link to="/coffee">Drink Coffee</Link>
        </li>
      </ul>
    </div>
  </div>
);

const Pizza = () => (
  <div>
    <h1>Want to eat Pizza?</h1>
    <p>Put some money in!</p>
    <Link to="/">Take me home</Link>
  </div>
);

const Soda = () => (
  <div>
    <p>Want to drink some Soda?.</p>
    <Link to="/">Take me home</Link>
  </div>
);

const Coffee = () => (
  <div>
    <p>Want to drink some Coffee?.</p>
    <Link to="/">Take me home</Link>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Vending Machine</h1>
        </header>

        <div class="content">
          <div class="left-col">
            <img src="https://www.federalmachine.com/images/vending-machines/snack/MP23.jpg" />
          </div>
          <div class="right-col">
            <div>
              <Route path="/" exact component={Home} />
              <Route path="/pizza" component={Pizza} />
              <Route path="/soda" component={Soda} />
              <Route path="/coffee" component={Coffee} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
