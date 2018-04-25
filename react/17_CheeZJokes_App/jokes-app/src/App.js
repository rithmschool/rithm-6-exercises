import React, { Component } from 'react';
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
    console.log('entered addNewJoke');
  };

  upVoted = () => {
    console.log('entered upvote');
  };

  downVoted = () => {
    console.log('entered upvote');
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to Jokes App!</h1>
        <ListJokes
          upVoted={this.upVoted}
          downVoted={this.downVoted}
          addNewJoke={this.addNewJoke}
          jokes={this.state.jokes}
        />
      </div>
    );
  }
}

export default App;
