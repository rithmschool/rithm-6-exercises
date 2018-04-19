import React, { Component } from 'react';
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import NamedComponent from "./NamedComponent";
import Person from "./Person";
import Tweet from "./Tweet";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro"> 
          <div> part 1
            <FirstComponent />
            <SecondComponent />
            <NamedComponent name="Yang" />
          </div>
          <div> part 2
            <Tweet username="yangfreezy" name="Freezy" date="04-11-18" message="@ rithm rn LOL w the cohort yo yo yo" />
            <Tweet username="max11" name="Maximillian" date="04-11-18" message="*burps*" />
            <Tweet username="mark55" name="Mark" date="04-11-18" message="im a troll" />
            <Tweet username="niki99" name="Niki" date="04-11-18" message="dont get me started on raging bull" />
          </div>
          <div> part 3
            <Person name="Patrick" age="21" hobbies={["Runescape","Neopets","Halo"]} />
            <Person name="Neel" age="4" hobbies={["Trolling", "Being Bad At Halo", "Not running a start up"]} />
            <Person name="Nav" age="30" hobbies={["Coding","Running"]} />
          </div>
        </p>
      </div>
    );
  }
}

export default App;
