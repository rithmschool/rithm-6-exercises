import React, { Component } from 'react';

class Tweet extends Component {
  render() {
    return (
      <div className="tweet">
        <h3 className="name"> My name is, {this.props.name}.</h3>
        <h3 className="username">
          I usually go by the username, {this.props.username}.
        </h3>
        <h3 className="username">This is date I like, {this.props.date}</h3>
        <h4 className="message">
          <i>{this.props.message}</i>
        </h4>
      </div>
    );
  }
}

export default Tweet;
