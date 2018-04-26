import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    return (
      <div className="Pokecard Pokecard-container">
        <p className="Pokecard__title">{this.props.name}</p>
        <div className="Pokecard__img">
          <img src={this.props.image} alt={this.props.name} />
        </div>
        <p className="Pokecard__type">
          <strong>Type:</strong> {this.props.type}{" "}
        </p>
      </div>
    );
  }
}

export default Pokecard;
