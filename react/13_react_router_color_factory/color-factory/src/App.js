import React, { Component } from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
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
      return { Colors: [...prevState.Colors, newColor] };
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
            render={props => (
              <ShowColor
                color={
                  this.state.Colors.filter(color => {
                    debugger;
                    return props.match.params.name === color.name;
                  })[0]
                }
                {...props}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
