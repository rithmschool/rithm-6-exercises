import React, { Component } from 'react';
import uuidv1 from 'uuid';

import Joke from './Joke';

class ListJokes extends Component {
  render() {
    debugger;
    console.log('entering jokeList');
    const jokes = this.props.jokes.map(joke => {
      return (
        <Joke
          key={uuidv1()}
          id={joke.id}
          title={joke.title}
          count={joke.count}
          upVoted={this.props.upVoted}
          downVoted={this.props.downVoted}
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
