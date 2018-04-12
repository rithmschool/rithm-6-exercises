import React, { Component } from "react";
import TweetComponent from "./tweetComponent.js";

class MultiTweetComponent extends Component {
  render() {
    let tweet = [
      <TweetComponent
        name="Tom Hanks"
        username="@tom"
        date="Dec 5, 2016"
        message="Just felt like running"
      />,
      <TweetComponent
        name="Mark Zuckerbeg"
        username="@mark"
        date="Apr 6, 2017"
        message="Facebook doesn't spy"
      />,
      <TweetComponent
        name="Barack Obama"
        username="@obama"
        date="Nov 7, 2014"
        message="Bubble sort is not the way to go"
      />
    ];

    return (
      <div>
        <p>{tweet}</p>
      </div>
    );
  }
}

export default MultiTweetComponent;
