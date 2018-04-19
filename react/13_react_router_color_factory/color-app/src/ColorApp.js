import React, { Component } from "react";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import ColorList from "./ColorList.js";
import NewColorForm from "./NewColorForm.js";
import ColorShow from "./ColorShow.js";
import "./ColorApp.css";

class ColorApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        {
          name: "Violet",
          colorValue: "9575AB"
        },
        {
          name: "Blood-Red",
          colorValue: "4C0017"
        }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd(newColor) {
    this.setState(prevState => ({
      colors: [...prevState.colors, newColor]
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="color__logo">
            <Link to="/colors">
              <img
                src="https://data.whicdn.com/images/75451884/large.png"
                alt=""
              />
            </Link>
          </div>
          <div className="title">
            Once In A Blue Moon, The Perfect Color App Comes Along...
          </div>
          <p className="App-intro">
            <Link to="/colors/new">Add A New Color</Link>
          </p>
        </header>
        <div>
          <Switch>
            <Route
              path="/colors/new"
              render={props => (
                <NewColorForm
                  handleAdd={this.handleAdd.bind(this)}
                  {...props}
                />
              )}
            />
            <Route
              path="/colors/:color"
              render={props => (
                <ColorShow colors={this.state.colors} {...props} />
              )}
            />
            <Route
              path="/colors"
              render={props => (
                <ColorList colors={this.state.colors} {...props} />
              )}
            />

            <Redirect from="/" to="/colors" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default ColorApp;
