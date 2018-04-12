import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent.js';
import SecondComponent from './SecondComponent.js';
import NamedComponent from './NamedComponent.js';
import Tweet from './TweetComponent.js';
import MultyTweet from './MultyTweet.js';
import Person from './PersonComponent.js';
import MultiPersons from './MultipersonsComponent.js';
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
        <NamedComponent name="Max" />
        <Tweet
          username="@Max"
          name="Max"
          date="February 29 1992"
          message="HELLLOOOOO"
        />
        <MultyTweet />
        <Person
          hobbies={['GOLF', 'MUSIC', 'COFFEE']}
          name="fffdfffffffffff"
          age="20"
        />
        <MultiPersons />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
