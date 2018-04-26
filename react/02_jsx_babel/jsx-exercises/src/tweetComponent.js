import React, { Component } from "react";
import "./App.css";

class TweetComponent extends Component {
  render() {
    return (
      <div>
        <p>
          <span className="Twt-name">{this.props.name}</span>{" "}
          <span className="Twt-username">{this.props.username}</span> :{" "}
          <span className="Twt-date">{this.props.date}</span> -{" "}
          <span className="Twt-msg">{this.props.message}</span>
        </p>
      </div>
    );
  }
}

export default TweetComponent;
