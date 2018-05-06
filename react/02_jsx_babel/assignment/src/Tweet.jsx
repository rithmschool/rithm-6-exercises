import React, { Component } from "react";
import "./Tweet.css";

class Tweet extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="tweet">
        <p>{this.props.username}</p>
        <p>{this.props.user}</p>
        <p>{this.props.date}</p>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default Tweet;
