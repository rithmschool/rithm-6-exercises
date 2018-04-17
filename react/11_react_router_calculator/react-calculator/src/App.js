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
          <Link to="/add/1/2">1+2</Link>
        </li>

        <li>
          <Link to="/subtract/4/2">4-2</Link>
        </li>

        <li>
          <Link to="/divide/9/3">9/3</Link>
        </li>

        <li>
          <Link to="/multiply/5/5">5*5</Link>
        </li>
      </ul>
    </div>
  </div>
);

const Add = props => {
  const { num1, num2 } = props.match.params;
  <div>
    return <h1>Sum of these two numbers is {Number(num1) + Number(num2)}</h1>;
    <Link to="/">Take me to front page</Link>
  </div>;
};

const Subtract = props => {
  const { num1, num2 } = props.match.params;
  return (
    <div>
      <h1>Subtract of these two numbers is {Number(num1) - Number(num2)}</h1>
      <Link to="/">Take me to front page</Link>
    </div>
  );
};

const Divide = props => {
  const { num1, num2 } = props.match.params;
  return (
    <div>
      <h1>Division of these two numbers is {Number(num1) / Number(num2)}</h1>
      <Link to="/">Take me to front page</Link>
    </div>
  );
};

const Multiply = props => {
  const { num1, num2 } = props.match.params;
  return (
    <div>
      <h1>Product of these two numbers is {Number(num1) / Number(num2)}</h1>

      <Link to="/">Take me to front page</Link>
    </div>
  );
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Calculator</h1>
        </header>

        <div class="content">
          <div class="left-col">
            <img src="https://www.staples.co.uk/content/images/product/GenesisExtraLarge/48/72/asset.704872.jpg" />
          </div>
          <div class="right-col">
            <div>
              <Route path="/" exact component={Home} />
              <Route path="/add/:num1/:num2" component={Add} />
              <Route path="/subtract/:num1/:num2" component={Subtract} />
              <Route path="/divide/:num1/:num2" component={Divide} />
              <Route path="/multiply/:num1/:num2" component={Multiply} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
