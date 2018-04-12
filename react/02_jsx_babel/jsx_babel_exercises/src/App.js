import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FirstComponent, SecondComponent, NamedComponent } from './Words';
import Tweet from './Tweet';
import Person from './Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hiya! Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FirstComponent />
        <SecondComponent />
        <NamedComponent name="El Programador" />
        <Tweet name="Rich" username="richman" date="2h" message="Coding rocks" />
        <Tweet name="Rico" username="elrico" date="1d" message="JS is the best" />
        <Tweet name="Ricardo" username="senorricardo" date="Feb 7" message="Python rules" />
        <Person name="Andy" age="22" hobbies={['kayaking', 'sailing', 'jet skiing']} />
        <Person name="AndrewLongfellow" age="19" hobbies={['coding', 'more coding', 'no life, only coding']} />
        <Person name="Andrea" age="37" hobbies={['poetry', 'music', 'theatre']} />
      </div>
    );
  }
}

export default App;
