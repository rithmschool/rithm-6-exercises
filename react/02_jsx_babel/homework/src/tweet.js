import React, { Component } from "react";

class Tweet extends Component {
  render() {
    return (
      <p>
        Username: {this.props.username}, name: {this.props.name}, date:{" "}
        {this.props.date}, message: {this.props.message}
      </p>
    );
  }
}

export default Tweet;
