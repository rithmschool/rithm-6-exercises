import React, { Component } from 'react';

class Joke extends Component {
  render() {
    return (
      <div>
        <p>Joke: {this.props.title}</p>
        <p>Count: {this.props.count}</p>
        <button onSubmit={this.props.upVoted}>Up</button>
        <button onSubmit={this.props.downVoted}>Down</button>
      </div>
    );
  }
}

export default Joke;
