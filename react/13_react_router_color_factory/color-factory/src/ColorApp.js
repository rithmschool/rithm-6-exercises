import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import ColorForm from "./ColorForm.js";
import ColorPage from "./ColorPage.js";
import ColorList from "./ColorList.js";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        {
          name: "blue",
          value: "#0000ff"
        },
        {
          name: "orange",
          value: "#FFA500"
        }
      ]
    }
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newColor) {
    this.setState(prevState => ({
      colors: [newColor, ...prevState.colors]
    }));
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="/new">New Color</Link>
          <Link to="/colors">All Colors</Link>
        </nav>
        <Switch>
          <Route
            path="/new"
            render={routeProps => <ColorForm handleAdd={this.handleAdd} />}
          />
          <Route
            path="/colors"
            exact
            render={routeProps => (
              <ColorList colorData={this.state.colors} {...routeProps} />
            )}
          />
          <Route path="/colors/:color" exact render={routeProps => (
              <ColorPage colorData={this.state.colors} {...routeProps}/>
          )}/>

          <Redirect to="/colors" />
        </Switch>
      </div>
    );
  }
}

export default App;
