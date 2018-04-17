import React, { Component } from 'react';

class Tweet extends Component {
  render() {
    //does render get a 'name' parameter?
    return (
      <div className="tweet">
        <p>Username: {this.props.username}</p>
        <p>Message: {this.props.message}</p>
        <p>Date: {this.props.date}</p>
      </div>
    );
  }
}

export default Tweet;
