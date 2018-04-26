import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NewColorForm from "./NewColorForm";
import Color from "./Color";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        {
          name: "limegreen",
          value: "#bada55"
        }
      ]
    };
    this.addColor = this.addColor.bind(this);
  }

  // just the app class . Highest ranking component:Parent component. It has state and one that saves all
  //the colors

  addColor(newColor) {
    this.setState({
      colors: [newColor, ...this.state.colors]
    });
  }

  //function that invoking on tghe new form. trigering function when submiting form on
  //different component.When click submit thgere this function is called and from that state of the component
  //we invoking this function component.

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/colors/new"
            render={routerProps => (
              <NewColorForm addColor={this.addColor} {...routerProps} />
            )}
          />
          <Route
            path="/colors/:name"
            render={routerProps => {
              if (
                this.state.colors.filter(
                  color => routerProps.match.params.name === color.name
                )[0]
              ) {
                return (
                  <Color
                    color={
                      this.state.colors.filter(
                        color => routerProps.match.params.name === color.name
                      )[0]
                    }
                    {...routerProps}
                  />
                );
              } else return <Redirect to="/colors" />;
            }}
          />
          <Route
            path="/colors"
            exact
            render={routerProps => (
              <Home colors={this.state.colors} {...routerProps} />
            )}
          />
          <Redirect to="/colors" />
        </Switch>
      </div>
    );
  }
}

export default App;
