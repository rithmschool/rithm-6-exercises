import React, { Component } from "react";
import "./TweetComponent.css";

class TweetComponent extends Component {
  render() {
    return (
      <div className="Tweet">
        <div className="flex">
          <h4>
            <em>{this.props.name}</em>
          </h4>
          <h5>@{this.props.username}</h5>
        </div>
        <p>{this.props.message}</p>
        <small>{this.props.date}</small>
      </div>
    );
  }
}

export default TweetComponent;
