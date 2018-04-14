import React, { Component } from 'react';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import NamedComponent from './NamedComponent';
import Name from './NamedComponent';
import logo from './logo.svg';
import './App.css';
import Tweet from './Tweet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Babel 02</h1>
        <h2>Part 02</h2>
        <Tweet
          username="Leo328"
          name="Leo Ng"
          date="July 30th"
          message="I will relentlessly pursue my goals until I am dead."
        />
        <br />
        <Tweet
          username="KSecco"
          name="Karl Secco"
          date="a good night out with Fang"
          message="I will troll instructors to bring the people together"
        />
        <br />
        <br />
        <h2>Part 03</h2>
      </div>
    );
  }
}

<NamedComponent />;

export default App;
