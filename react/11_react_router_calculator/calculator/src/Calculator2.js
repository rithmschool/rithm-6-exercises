import React, { Component } from "react";
import { Route, Links } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Hello I'm a Squre</h1>
  </div>
);

const Add = props => {
  let { a, b } = props.match.params;
  return <div>{+a + +b}</div>;
};

const Multiply = props => {
  let { a, b } = props.match.params;
  return <div>{+a * +b}</div>;
};

const Subtract = props => {
  let { a, b } = props.match.params;
  return <div>{+a - +b}</div>;
};

const Divide = props => {
  let { a, b } = props.match.params;
  return <div>{+a / +b}</div>;
};

class Calculator2 extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/add/:a/:b" exact component={Add} />
        <Route path="/multiply/:a/:b" exact component={Multiply} />
        <Route path="/subtract/:a/:b" exact component={Subtract} />
        <Route path="/divide/:a/:b" exact component={Divide} />
      </div>
    );
  }
}

export default Calculator2;
