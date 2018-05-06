import React, { Component } from "react";
import First from "./FirstComponent";
import Second from "./SecondComponent";
import Named from "./NamedComponent";
import Tweet from "./Tweet";
import Person from "./Person";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          Part 1
          <First />
          <Second />
          <Named name="niki" />
        </div>
        <hr />
        <div>
          Part 2
          <Tweet
            username="ILoveSandWhiches"
            user="niki"
            date="Tuesday"
            message="Howdy"
          />
          <Tweet
            username="ILoveSandWhiches"
            user="Cyrus"
            date="Tuesday"
            message="I Like People"
          />
          <Tweet
            username="ILoveSandWhiches"
            user="Xeres"
            date="Tuesday"
            message="I Don't"
          />
        </div>
        <hr />
        <div>
          Part 3
          <Person
            name="Niki"
            age={24}
            hobbies={["coding", "codin", "coughding"]}
          />
        </div>
      </div>
    );
  }
}

export default App;
