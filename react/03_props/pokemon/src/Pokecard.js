import React, { Component } from "react";

export default class Pokecard extends Component {
  render() {
    let style = {
      backgroundColor: "gray",
      borderRadius: "25px",
      width: "30%",
      margin: "0 auto"
    };
    let h2 = {
      color: "blue",
      marginTop: "10px"
    };
    return (
      <div style={style}>
        <h2 style={h2}>{this.props.name}</h2>
        <img src={this.props.image} alt="" />
        <h4>Type: {this.props.type}</h4>
      </div>
    );
  }
}
