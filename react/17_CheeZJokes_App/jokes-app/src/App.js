import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListJokes from './ListJokes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: []
      // jokes: [{title: 'title', id:1234, count:0}]
    };
  }

  addNewJoke = () => {
    //null
  };

  upVoted = () => {
    //null
  };

  downVoted = () => {
    //null
  };

  render() {
    return (
      <div className="App">
        <ListJokes
          upVoted={upVoted}
          downVoted={this.downVoted}
          addNewJoke={this.addNewJoke}
        />
      </div>
    );
  }
}

export default App;
