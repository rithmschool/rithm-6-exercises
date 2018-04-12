import React, { Component } from 'react';

class Tweet extends Component {
    render() {
        return (
            <div className="tweet-box">
                <h4 className="tweet-username-date">
                <span className="tweet-username">@{this.props.username}</span>
                <span className="tweet-date">{this.props.date}</span>
                </h4>
                <h5 className="tweet-user-name">{this.props.name}</h5>
                <p className="tweet-message">{this.props.message}</p>
            </div>
        )
    }
}

export default Tweet;