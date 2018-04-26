import React, { Component } from "react";
import NewDivForm from "./NewDivForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divs: []
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newDiv) {
    this.setState(prevState => ({
      divs: [newDiv, ...prevState.divs]
    }));
  }

  render() {
    const divs = this.state.divs.map((d, i) => (
      <div
        style={{
          height: `${d.height}px`,
          width: `${d.width}px`,
          backgroundColor: d.backgroundColor,
          display: "inline-block"
        }}
        key={i}
      />
    ));
    return (
      <section className="App">
        <NewDivForm handleAdd={this.handleAdd} />
        {divs}
      </section>
    );
  }
}

export default App;
