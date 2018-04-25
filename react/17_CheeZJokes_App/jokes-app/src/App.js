import React, { Component } from 'react';
import axios from 'axios';
import uuidv1 from 'uuid';
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

  async componentDidMount() {
    console.log('entered componentDidMount');
    const res = await axios('https://icanhazdadjoke.com/search', {
      headers: {
        Accept: 'application/json'
      },
      limit: 40
    });
    const jokesArr = res.data.results;
    // debugger;
    // console.log('joke!:', res);
    // console.log('jokesArr!:', jokesArr);
    const jokesSet = new Set();
    let counter = 0;
    while (jokesSet.size < 20) {
      jokesSet.add(jokesArr[counter].joke);
      counter++;
    }
    const jokes = [...jokesSet];
    const jokeObjs = jokes.map(joke => {
      return { title: joke, id: uuidv1(), count: 0 };
    });
    this.setState(prevState => {
      return { ...prevState, jokes: jokeObjs };
    });
    // debugger;
    // console.log('jokesSet!:', jokesSet);
  }

  addNewJoke = () => {
    console.log('entered addNewJoke');
  };

  upVoted = id => {
    console.log('entered upvote');
    debugger;
    const updatedJokes = this.state.jokes.map(
      joke => (joke.id === id ? (joke.count = joke.count++) : joke)
    );
    this.setState(prevState => ({ ...prevState, jokes: updatedJokes }));
  };

  downVoted = id => {
    console.log('entered upvote');
  };

  render() {
    // debugger;
    console.log('listJokes');
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
