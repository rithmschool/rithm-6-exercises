import React, { Component } from "react";

class Tweet extends Component {
  render() {
    return (
      <div class="singleTweet">
        <h3 class="username">@{this.props.username}</h3>
        <h3 class="name">Name: {this.props.name}</h3>
        <h3 class="date">Posted on: {this.props.date}</h3>
        <p class="message">Message: {this.props.message}</p>
      </div>
    );
  }
}

export default Tweet;
