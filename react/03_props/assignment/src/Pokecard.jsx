import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <h1>{this.props.name}</h1>
        <img src={this.props.image} />
        <h4>Type: {this.props.type}</h4>
      </div>
    );
  }
}

export default Pokecard;
