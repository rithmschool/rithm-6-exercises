import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import NamedComponent from "./NamedComponent";
import Tweet from "./Tweet";
import Person from "./Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <FirstComponent />
        <SecondComponent />
        <NamedComponent name="Baloo" /> */}
        {/* <Tweet
          name="Zoran"
          date="04-01-2018"
          message="Hello first tweet is here"
        />
        <Tweet
          name="Whiskey"
          date="04-03-2018"
          message="Woof woof woof second tweet is here"
        />
        <Tweet
          name="Baloo"
          date="04-05-2018"
          message="Av av av third tweet is here"
        /> */}
        <div id="inner">
          <Person
            name="Zoka"
            age={78}
            hobbies={["Sleeping", "Snooring", "Yawing"]}
          />
          <Person
            name="Elie"
            age={22}
            hobbies={["Talking", "Screeming", "Yelling"]}
          />
          <Person
            name="Matt"
            age={21}
            hobbies={["Math", "MathAgain", "MathAlways"]}
          />
        </div>
        ); } }
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Second Homework</h1>
        </header>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
        </p>
      </div>
    );
  }
}

export default App;
