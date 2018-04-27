import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import Joke from "./components/Joke.js";
import "./App.css";

// const jokes = "https://icanhazdadjoke.com/search?term=movie";

class App extends Component {
  constructor(props) {
    console.log("App constructor");
    super(props);
    this.state = {
      jokes: [] // id: 1, text: "Why did the chicken cross the road?" }
    };
  }

  componentDidMount() {
    this.randomJokes();
  }

  handleUpvote(jokeId) {
    const currentJoke = this.state.jokes.find(joke => joke.id === jokeId);
    console.log(currentJoke);

    // update the value of currentJoke.vote
    // currentJoke.vote <-- change this
    // then call setState
  }

  handleDownvote(jokeId) {
    /**
     * this.state.jokes
     * [
     * {
     *   text: 'joke text',
     *   id: '12345',
     *   votes: 0
     * }
     * ]
     *
     */
    const currentJoke = this.state.jokes.find(joke => joke.id === jokeId);
    console.log(currentJoke);
    // currentJoke.vote <-- change this
    // then call setState
  }

  vote() {}

  randomJokes() {
    console.log("randomJokes()");
    axios
      .get(
        `https://icanhazdadjoke.com/search?page=${Math.floor(
          Math.random() * 15
        )}`,
        {
          headers: { Accept: "application/json" }
        }
      )
      .then(response => {
        const jokes = response.data.results.map(joke => ({
          id: joke.id,
          text: joke.joke,
          votes: 0
        }));
        console.log("jokes=", jokes);
        this.setState({ jokes: jokes });
      });
  }

  render() {
    console.log("App render");
    if (this.state.jokes.length > 0) {
      return (
        <div className="App">
          <header className="App-header">
            <img
              src={"http://roflzoo.com/pics/042010/happy-smiling-sloth.jpg"}
              className="App-logo"
              alt=""
            />
            <h1 className="App-title">Welcome to Joke App</h1>
          </header>
          {this.state.jokes.map(joke => (
            <Joke
              joke={joke}
              key={joke.id}
              votes={joke.votes}
              handleUpvote={this.handleUpvote.bind(this, joke.id)}
              handleDownvote={this.handleDownvote.bind(this, joke.id)}
            />
          ))}
          <button onClick={() => this.randomJokes()}> Refresh </button>
        </div>
      );
    } else {
      return "loading...";
    }
  }
}

export default App;
