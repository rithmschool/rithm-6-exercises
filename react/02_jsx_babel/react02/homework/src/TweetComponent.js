import React, { Component } from 'react';

class Tweet extends Component {
  render() {
    return (
      <p>
        {' '}
        Username: {this.props.username} Name: {this.props.name} Date:{' '}
        {this.props.date} Message: {this.props.message}
      </p>
    );
  }
}

export default Tweet;
