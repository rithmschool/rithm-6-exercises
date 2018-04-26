import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Div from "./Div";
import NewDivForm from "./NewDivForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      div: [{ width: "100", height: "100", backgroundColor: "pink" }]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newDiv) {
    this.setState(prevState => ({
      div: [newDiv, ...prevState.div]
    }));
  }

  render() {
    let myColors = this.state.div.map((colorDiv, idx) => {
      return (
        <Div
          key={idx}
          width={colorDiv.width}
          height={colorDiv.height}
          backgroundColor={colorDiv.backgroundColor}
        />
      );
    });
    return (
      <div>
        <NewDivForm handleAdd={this.handleAdd} />
        {myColors}
      </div>
    );
  }
}

export default App;
