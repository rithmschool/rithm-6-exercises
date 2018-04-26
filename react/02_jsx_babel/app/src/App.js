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
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div>
          <h2>Part 1 </h2>
          <FirstComponent />
          <SecondComponent />
          <NamedComponent name="Hunter" />
        </div>
        <div>
          <h2>Part 2</h2>
          <div className="tweets">
            <Tweet
              username="spacexengineer"
              name="hunter"
              date="3/20"
              message="It's a bird..."
            />
            <Tweet
              username="spacexengineer"
              name="hunter"
              date="3/20"
              message="It's a plane..."
            />
            <Tweet
              username="spacexengineer"
              name="hunter"
              date="3/20"
              message="It's a tweet!!!!!!!!!!!!!!!!!!!!!!"
            />
          </div>
        </div>

        <div>
          <h2>Part 3</h2>
          <Person
            name="Hunterjkhasdfadfadfadf"
            age={24}
            hobbies={["icecream", "cookies", "beer"]}
          />
        </div>
      </div>
    );
  }
}

export default App;
