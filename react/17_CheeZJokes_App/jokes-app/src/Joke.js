import React, { Component } from 'react';

class Joke extends Component {
  render() {
    console.log('entering joke');
    // debugger;
    return (
      <div>
        <p>Joke: {this.props.title}</p>
        <p>Count: {this.props.count}</p>
        {/* <button onClick={() => console.log('meh')}>Up</button> */}
        <button onClick={this.props.upVoted}>Up</button>
        <button onClick={this.props.downVoted}>Down</button>
      </div>
    );
  }
}

export default Joke;
