import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NewForm from './NewForm';
import ColorList from './ColorList';
import SingleColor from './SingleColor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        { color: 'orange', code: '#FFC300' },
        { color: 'blue', code: '#0336F2' },
        { color: 'green', code: '#2ECC71' }
      ]
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
      <div>
        <Switch>
          <Route
            path="/colors/new"
            exact
            render={props => <NewForm handleAdd={this.handleAdd} {...props} />}
          />
          <Route
            path="/colors"
            exact
            render={props => (
              <ColorList allColors={this.state.colors} {...props} />
            )}
          />
          <Route
            path="/colors/:color"
            exact
            render={props => {
              if (
                this.state.colors.filter(
                  color => props.match.params.color === color.name
                )
              ) {
                return (
                  <SingleColor color={props.match.params.color} {...props} />
                );
              } else {
                return <Redirect to="/colors" />;
              }
            }}
          />
          <Redirect to="/colors" />
        </Switch>
      </div>
    );
  }
}

export default App;
