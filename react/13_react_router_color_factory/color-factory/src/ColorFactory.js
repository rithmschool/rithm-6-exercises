import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import List from './ColorList.js';
import Form from './NewColorForm.js';
import ColorPage from './IndividualColor.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        { color: 'red', code: '#F20303' },
        { color: 'blue', code: '#0336F2' },
        { color: 'orange', code: '#F27303' }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd(newColor) {
    this.setState(prevState => ({
      colors: [newColor, ...prevState.colors]
    }));
    console.log(this.state.colors);
  }
  render() {
    return (
      <div>
        <div>
          <Link to="/new">Add a New Color</Link>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Route
            path="/new"
            exact
            component={props => <Form handleAdd={this.handleAdd} />}
          />
          <Route
            path="/"
            exact
            component={() => <List allColors={this.state.colors} />}
          />
          <Route
            path="/:color"
            exact
            component={props => (
              <ColorPage
                color={props.match.params.color}
                hexCode={
                  this.state.colors.filter(
                    color => color.color === props.match.params.color
                  ).code
                }
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
