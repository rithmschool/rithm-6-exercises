import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import NamedComponent from './NamedComponent';
import Tweet from './Tweet';
import Person from './Person';

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
        <NamedComponent name="Kelson" />
        <Tweet
          name="Kelson Warner"
          date="March 5, 2001"
          message="This is my first tweet."
        />
        <Tweet
          name="Jimmy James"
          date="June 5, 2011"
          message="This is my second tweet."
        />
        <Tweet
          name="Alred Smith"
          date="June 5, 1941"
          message="This is a really old tweet."
        />
        <Person
          name="Andoo"
          age="21"
          hobbies={['fishing', 'coding 90 hours a week', 'never relaxing']}
        />
        <Person
          name="A Man A Plan A Canal Panama"
          age="19"
          hobbies={['coding', 'stuff', 'no life, cats']}
        />
        <Person
          name="Jeff"
          age="37"
          hobbies={['heavy metal', 'music', 'dogs']}
        />
      </div>
    );
  }
}

export default App;
