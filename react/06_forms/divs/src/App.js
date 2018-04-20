import React, { Component } from "react";
import Div from "./Div";
import NewDivForm from "./NewDivForm";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { divs: [] };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newDiv) {
    this.setState(prevState => {
      return { divs: [newDiv, ...prevState.divs] };
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to DIV Creater</h1>
        </header>

        <NewDivForm handleAdd={this.handleAdd} />

        {this.state.divs.map((element, idx) => (
          <p>
            <Div key={idx} {...element} />
          </p>
        ))}
      </div>
    );
  }
}

export default App;
