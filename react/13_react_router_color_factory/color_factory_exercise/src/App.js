import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import ColorForm from "./ColorForm";
import ColorList from "./ColorList";
import ShowColor from "./ShowColor";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorsData: [{
        name: 'bleck',
        color: "#123456"
      }]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(data) {
    let newState = {
      colorsData: [data, ...this.state.colorsData]
    };
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Color Factory Exercise</h1>
          <div>
            <Link to="/new">Add a Color</Link>
          </div>
          <div>
            <Link to="/colors">Home</Link>
          </div>
        </header>
        <Switch>
          <Route path="/new" render={routeProps => (<ColorForm handleAdd={this.handleAdd} {...routeProps} />)} />
          <Route path="/colors/:color" render={routeProps => (<ShowColor colorsData={this.state.colorsData} {...routeProps} />)} />
          <Route path="/colors" render={routeProps => (<ColorList colorsData={this.state.colorsData} {...routeProps} />)} />
          <Redirect to="/colors" />
          {/*<Route component={() => <div>404, not a valid url!!!</div>} /> */}
        </Switch>
      </div >
    );
  }
}

export default App;
