import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import NamedComponent from './NamedComponent';
import Tweet from './Tweet';
import Person from './Person';

class App extends Component {
  render() {
    return (
      <div className="main">
        <FirstComponent />
        <SecondComponent />
        <h2>Tweets:</h2>
        <NamedComponent name="Matt" />
        <Tweet username="Elie" date="Monday" message="So glad to be back" />
        <Tweet
          username="Matt"
          date="Like an hour ago"
          message="Spittin' wisdom here"
        />
        <Tweet
          username="Joel"
          date="Like pretty much always"
          message="Yay python and sql!"
        />
        <Tweet
          username="Michael"
          date="In another life"
          message="Blub Blub I'm a fish"
        />
        <h2>Drink Eligibility Status:</h2>
        <Person name="Karl" age="19" />
        <Person name="Charmaine" age="something-9" />
        <Person name="Daniel" age="3-something?" />
      </div>
    );
  }
}

export default App;
