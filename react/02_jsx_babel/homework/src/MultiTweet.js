import React, { Component } from "react";
import Tweet from "./tweet";

class MultiTweet extends Component {
  render() {
    let tweets = [
      <Tweet username="max" name="Fenris" date="October 34" message="Hooli" />,
      <Tweet username="max" name="Fenris" date="October 34" message="Hooli" />,
      <Tweet username="max" name="Fenris" date="October 34" message="Hooli" />
    ];
    return <p>{tweets}</p>;
  }
}

export default MultiTweet;
