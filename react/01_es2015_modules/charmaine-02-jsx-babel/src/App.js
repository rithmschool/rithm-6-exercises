import React, { Component } from 'react';
import { FirstComponent } from "./FirstComponent";
import { SecondComponent}  from "./SecondComponent";
import { NamedComponent } from "./NamedComponent";
import { Tweet } from "./Tweet";
import logo from './logo.svg';
import './App.css';
import './Tweet.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My First React App</h1>
        </header>
        <FirstComponent/>
        <SecondComponent/>
        <NamedComponent/>
        <Tweet username="charmatcha" name="Charmaine" date="4-11-18" message="React is cool!"/>
        <Tweet username="octocat" name="GitGit" date="4-9-18" message="My repo rules."/>
        <Tweet username="rithmschool" name="Rithm Team" date="4-11-18" message="Rithm-6 is the best!!!"/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
