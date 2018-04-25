import React, { Component } from 'react';

import Joke from './Joke';

class ListJokes extends Component {
  render() {
    const jokes = this.props.jokes.map(joke => {
      return (
        <Joke
          // key={uuidv1()}
          id={joke.id}
          tite={joke.title}
          count={joke.count}
          upVoted={this.props.upVoted}
          downVoted={this.props.downVoted}
        />
      );
    });
    return <ul>{jokes}</ul>;
  }
}

export default ListJokes;
