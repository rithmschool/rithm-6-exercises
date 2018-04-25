import React, { Component } from 'react';
import uuidv1 from 'uuid';

import Joke from './Joke';

class ListJokes extends Component {
  render() {
    console.log('entering jokeList');
    // debugger;
    const jokes = this.props.jokes.map(joke => {
      return (
        <Joke
          key={uuidv1()}
          id={joke.id}
          title={joke.title}
          count={joke.count}
          upVoted={this.props.upVoted.bind(this, joke.id)}
          // upVoted={this.props.upVoted.bind(this, joke.id)}
          // upVoted={() => this.props.upVoted(joke.id)}
          downVoted={this.props.downVoted.bind(this, joke.id)}
        />
      );
    });
    return (
      <div>
        <h2>Jokes:</h2>
        <ul>{jokes}</ul>
      </div>
    );
  }
}

export default ListJokes;
