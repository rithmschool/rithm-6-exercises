import React, { Component } from "react";

class Tweet extends Component {
  render() {
    return (
      <div>
        <p>
          {" "}
          {this.props.name}'s tweeted on {this.props.date}:
        </p>
        <h3> {this.props.message} </h3>
      </div>
    );
  }
}

export default Tweet;
