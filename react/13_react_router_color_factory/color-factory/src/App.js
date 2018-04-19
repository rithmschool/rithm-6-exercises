import React, { Component } from 'react';
import { Route, Link, Switch, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import ListColors from './ListColors';
import NewColorForm from './NewColorForm';
import ShowColor from './ShowColor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Colors: [
        { name: 'AwesomeGreen', color: 'green' },
        { name: 'red', color: 'red' },
        { name: 'pearl', color: '#eae0c8' }
      ]
    };
    this.addColor = this.addColor.bind(this);
  }

  addColor(newColor) {
    this.setState(prevState => {
      return { Colors: [newColor, ...prevState.Colors] };
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to ColorZone</h1>
        <h2>So. Many. Colors.</h2>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <ListColors key={0} Colors={this.state.Colors} />}
          />
          <Route
            path="/colors/new"
            render={() => {
              return <NewColorForm addColor={this.addColor} />;
            }}
          />

          <Route
            path="/colors/:name"
            render={props => {
              if (
                this.state.Colors.filter(
                  color => props.match.params.name === color.name
                )[0]
              ) {
                return (
                  <ShowColor
                    color={
                      this.state.Colors.filter(
                        color => props.match.params.name === color.name
                      )[0]
                    }
                    {...props}
                  />
                );
              } else return <Redirect to="/colors" />;
            }}
          />
          {/*
          <Route
            path="/colors/:name"
            render={props =>
              <ShowColor
                color={
                  this.state.Colors.filter(color => {
                    return props.match.params.name === color.name;
                  })[0]
                }
                {...props}
              />
            )}
          /> */}
          <Route
            render={() => {
              return <Redirect to={'/'} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
