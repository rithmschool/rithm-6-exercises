import React, { Component } from 'react';
import './App.css';

class Tweet extends Component {
  render() {
    return (
      <div className="Tweet-container">
        <hr />
        <h2 className="Tweet-username">@{this.props.username}</h2>
        <p className="Tweet-message">
          {this.props.message}
          <br />
          <span className="Tweet-name-date">
            <strong>
              Posted by {this.props.name} on {this.props.date}
            </strong>
          </span>
        </p>
        <hr />
      </div>
    );
  }
}

export default Tweet;
