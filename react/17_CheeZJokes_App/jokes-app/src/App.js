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
    debugger;
    this.setState(async prevState => {
      const res = await axios('https://icanhazdadjoke.com/search', {
        headers: {
          Accept: 'application/json'
        },
        //goal is to help us get new joke
        current_page: 2,
        limit: 10
      });
      const newJokesArr = res.data.results;
      const currentJokesSet = new Set(prevState.jokes);
      let newSize = currentJokesSet.size + 1;
      let counter = 0;
      while (currentJokesSet.size < newSize) {
        currentJokesSet.add(newJokesArr[counter].joke);
      }
      const updatedJokes = [...currentJokesSet];
      return { ...prevState, jokes: updatedJokes };
    });
  };

  upVoted = id => {
    console.log('entered upvote');
    // debugger;
    // const updatedJokes = this.state.jokes.map(
    //   joke => (joke.id === id ? (joke.count = joke.count++) : joke)
    // );
    this.setState(prevState => {
      // debugger;
      const updatedJokes = prevState.jokes.map(joke => {
        //keep failing to get this format to work :(
        // joke => (joke.id === id ? joke.count++ : joke);
        if (joke.id === id) {
          debugger;
          joke.count++;
        }
        return joke;
      });
      // debugger;
      return { ...prevState, jokes: updatedJokes };
    });
  };

  downVoted = id => {
    console.log('entered upvote');
    // debugger;
    // const updatedJokes = this.state.jokes.map(
    //   joke => (joke.id === id ? (joke.count = joke.count++) : joke)
    // );
    this.setState(prevState => {
      // debugger;
      const updatedJokes = prevState.jokes.map(joke => {
        //keep failing to get this format to work :(
        // joke => (joke.id === id ? joke.count++ : joke);
        if (joke.id === id) {
          debugger;
          joke.count--;
        }
        return joke;
      });
      // debugger;
      return { ...prevState, jokes: updatedJokes };
    });
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
