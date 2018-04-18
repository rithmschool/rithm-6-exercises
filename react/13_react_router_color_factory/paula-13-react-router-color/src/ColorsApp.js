import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { Navbar } from "bootstrap";
import ColorsForm from "./ColorsForm";
import ColorsList from "./ColorsList";
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
    return (
      <section>
        <Navbar>
          <Link to="/">All Colors</Link>
          <br />
          <Link to="/new">Add a new color</Link>
        </Navbar>
        <Switch>
          <Route
            path="/new"
            render={props => (
              <ColorsForm handleAdd={this.handleAdd} {...props} />
            )}
          />
          <Route
            path="/"
            render={props => (
              <ColorsList colors={this.state.colors} {...props} />
            )}
          />
        </Switch>
      </section>
    );
  }
}

export default ColorsApp;
