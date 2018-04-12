import React, { Component } from "react";
import logo from "./logo.svg";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import NamedComponent from "./NamedComponent";
import TweetComponent from "./TweetComponent.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Paula's Homework</h1>
        </header>
        <FirstComponent />
        <SecondComponent />
        <NamedComponent name="Paula" />
        <TweetComponent
          username="paulywag"
          name="Paula Goyanes"
          date="April 11th, 2018"
          message="What did the pirate say on his 80th birthday? Aye Matey!"
        />
        <TweetComponent
          username="yacky"
          name="Jackie Bosch"
          date="April 11th, 2018"
          message="To be Frank, I'd have to change my name."
        />
        <TweetComponent
          username="toadino"
          name="Marissa Todino"
          date="April 11th, 2018"
          message="Want to hear my pizza joke? Never mind, it's too cheesy."
        />
      </div>
    );
  }
}

export default App;
