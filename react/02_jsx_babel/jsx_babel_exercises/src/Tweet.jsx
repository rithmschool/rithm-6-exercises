import React, { Component } from "react";
import "./Tweet.css";

class Tweet extends Component {
  render() {
    return (
      <div>
        <strong>{this.props.name}</strong>
        <span>@{this.props.username}</span>
        <span>&#8729;{this.props.date}</span>
        <p>{this.props.message}</p>
      </div>
    )
  }
}

export default Tweet;
