import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./FirstComponent.js";
import SecondComponent from "./SecondComponent.js";
import NameComponent from "./NameComponent";
import Tweet from "./tweet";
import MultiTweet from "./MultiTweet";
import Person from "./Person";
import MultiPerson from "./MultiPerson"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FirstComponent />
        <SecondComponent />
        <Tweet
          username="@Max"
          name="Max"
          date="February 29 1992"
          message="HELLLOOOOO"
        />
        <MultiTweet />
        <NameComponent name="Max" />
        <Person
          age="22"
          name="MAXXXXXdafdfafdadfas"
          hobbies={[
            "code",
            "ski",
            "resight Shakespare"
          ]}
        />
        <MultiPerson />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
