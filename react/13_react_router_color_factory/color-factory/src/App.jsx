import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Home from './Home';
import NewColorForm from './NewColorForm';
import Color from './Color'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: [
        {
          name: "limegreen",
          value: "#bada55"
        }
      ]
    }
    this.addColor = this.addColor.bind(this)
  }

  addColor(newColor) {
    this.setState({ 
      colors: [ newColor, ...this.state.colors ]
    })
  }

  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/colors/new" render={routerProps => <NewColorForm addColor={this.addColor}  {...routerProps} />} />
          <Route path="/colors/:name" render={routerProps => {
            if(this.state.colors.filter(color => routerProps.match.params.name === color.name)[0]) {
              return <Color color={this.state.colors.filter(color => routerProps.match.params.name === color.name)[0]}  {...routerProps} />
            } else
              return <Redirect to="/colors" />
          }} />
          <Route path="/colors" exact render={routerProps => <Home colors={this.state.colors} {...routerProps} />} />
          <Redirect to="/colors"/>
        </Switch>
      </div>
    )
  }
}

export default App;
