import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import ColorsForm from "./ColorsForm";
import ColorsList from "./ColorsList";
import ColorShow from "./ColorShow";
import "./ColorsApp.css";

class ColorsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        { name: "red", value: "#f00" },
        { name: "blue", value: "#00f" },
        { name: "green", value: "#008000" },
        { name: "yellow", value: "	#FFFF00" }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.findColor = this.findColor.bind(this);
  }

  handleAdd(newColor) {
    this.setState(prevState => ({
      colors: [newColor, ...prevState.colors]
    }));
  }
  findColor(props) {
    const colorObj = this.state.colors.find(
      color => color.name === props.match.params.color
    );
    if (colorObj) {
      return colorObj.value;
    }
    return false;
  }

  render() {
    return (
      <section className="ColorsApp">
        <NavigationBar />
        <Switch>
          <Route
            exact
            path="/colors/new"
            render={props => (
              <ColorsForm handleAdd={this.handleAdd} {...props} />
            )}
          />
          <Route
            exact
            path="/colors/:color"
            render={props => {
              const foundColor = this.findColor(props);
              if (foundColor) {
                return <ColorShow color={foundColor} {...props} />;
              } else {
                return <Redirect to="/colors" />;
              }
            }}
          />
          <Route
            path="/colors"
            render={props => (
              <ColorsList colors={this.state.colors} {...props} />
            )}
          />
          <Redirect from="/" to="/colors" />
        </Switch>
      </section>
    );
  }
}

export default ColorsApp;
