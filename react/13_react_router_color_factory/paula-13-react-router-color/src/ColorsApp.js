import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import "./App.css";

class ColorsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [{ name: "red", values: "#fff" }]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd(newColor) {
    this.setState(prevState => ({
      colors: [newColor, ...prevState.colors]
    }));
  }
  render() {
    return <section>hi</section>;
  }
}

export default ColorsApp;
