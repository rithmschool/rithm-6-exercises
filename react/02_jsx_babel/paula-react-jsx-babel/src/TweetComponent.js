import React, { Component } from "react";
import "./TweetComponent.css";

class TweetComponent extends Component {
  render() {
    return (
      <div className="Tweet">
        <div className="user-info">
          <h4>
            <em>{this.props.name}</em>
          </h4>
          <h5>@{this.props.username}</h5>
        </div>
        <div className="user-message">
          <p>{this.props.message}</p>
          <small>{this.props.date}</small>
        </div>
      </div>
    );
  }
}

export default TweetComponent;
