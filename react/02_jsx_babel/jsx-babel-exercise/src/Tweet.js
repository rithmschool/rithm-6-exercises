import React, { Component } from "react";
import "./Tweet.css";

class Tweet extends Component {
  render() {
    return (
      <div className="Tweet">
        <h3 className="Tweet_username">Username : {this.props.username}</h3>
        <h4>Name: {this.props.name}</h4>
        <p className="date__style">Date: {this.props.date}</p>
        <p>Message: {this.props.message}</p>
      </div>
    );
  }
}

export default Tweet;
