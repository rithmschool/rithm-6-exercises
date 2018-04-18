import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.css';

const Calc = props => {

  const operation = props.match.params.operator
  const number1 = +props.match.params.num1
  const number2 = +props.match.params.num2
  let result;

  if (props.match.params.operator === "add") {
    result = number1 + number2;
  }
  if (props.match.params.operator === "subtract") {
    result = number1 - number2;

  }
  if (props.match.params.operator === "multiply") {
    result = number1 * number2;

  }
  if (props.match.params.operator === "divide") {
    result = number1/number2;
  }
  
  return (
    <div> 
    The answer is {result}
    </div>
  );

}

class App extends Component {
  render() {
    return (
      <div>
        <h1> Do some math! It's good for you!</h1>
        <img src="http://3.bp.blogspot.com/-Cl8qlhoOLu8/VXYkA9otFNI/AAAAAAAAA58/UOcVifStmwA/s1600/nerd.jpg" alt="calc"/>  
        <Route path="/:operator/:num1/:num2" component={Calc}/>
      </div>
    );
  }
}

export default App;
