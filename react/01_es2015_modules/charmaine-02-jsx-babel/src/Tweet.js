import React, { Component } from "react";

class Tweet extends Component {
    render() {
        return (
          <div className="Tweet" class="single-tweet">
          <p class="styled-text username">Username: {this.props.username} </p>
          <p class="styled-text">Name: {this.props.name} </p>
          <p class="styled-text">Date: {this.props.date} </p>
          <p class="styled-text">Message: <p class="message"> {this.props.message}</p></p>
          </div>
        );
    }
}

export { Tweet };
