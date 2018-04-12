import React, { Component } from 'react';
import Tweet from './TweetComponent.js';

class MultyTweet extends Component {
  render() {
    let tweets = [
      <Tweet name="Max" username="@max" message="HELLO" date="October 34" />,
      <Tweet name="Mark" username="@mark" message="HELLO" date="October 34" />,
      <Tweet name="Yang" username="@yang" message="HELLO" date="October 34" />
    ];
    return <p>{tweets}</p>;
  }
}

export default MultyTweet;
