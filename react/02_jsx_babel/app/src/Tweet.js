import React, { Component } from "react";
import "./Tweet.css";

class Tweet extends Component {
  render() {
    return (
      <div className="tweetContainer">
        <div className="singleTweet">
          <h3 class="name">{this.props.name}</h3>
          <h3 class="username">@{this.props.username}</h3>
          <h5 class="date">{this.props.date}</h5>
        </div>
        <p class="message">{this.props.message}</p>
      </div>
      //   <div className="Tweet">
      //     <div className="flex">
      //       <h4>
      //         <em>{this.props.name}</em>
      //       </h4>
      //       <h5>@{this.props.username}</h5>
      //       <small>{this.props.date}</small>
      //     </div>
      //     <p>{this.props.message}</p>
      //   </div>
    );
  }
}

export default Tweet;
