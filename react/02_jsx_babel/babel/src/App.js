import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComp from './FirstComponent';
import SecondComp from './SecondComponent';
import NamedComp from './NamedComponent';
import Tweet from './Tweet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-part-one">
          <FirstComp />
          <SecondComp />
          <NamedComp name="Karl" />
        </div>
        <div className="App-part-two">
          <Tweet
            username="mattbestteacher"
            name="Matt"
            date="3/14/15926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679"
            message="I wrote a book because math is hard."
          />
          <Tweet
            username="michaelbestjokes"
            name="Michael"
            date="4/1/18"
            message="You will never get a good job. Just kidding."
          />
          <Tweet
            username="eliebestrapper"
            name="Elie"
            date="4/20/18"
            message="This joke stinks so bad it rhymes with schm-elie."
          />
          <Tweet
            username="joelbestlefty"
            name="Joel"
            date="4/12/18"
            message="Thank goodness computers were invented--now the code I write can't get smudged!"
          />
        </div>
      </div>
    );
  }
}

export default App;
