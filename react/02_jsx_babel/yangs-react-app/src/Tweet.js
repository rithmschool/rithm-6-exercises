import React, { Component } from "react";
import './Tweet.css';

class Tweet extends Component {
    render() {
    return (<p className="Tweet">username: {this.props.username} name: {this.props.name} date: {this.props.date} message: {this.props.message}. </p>);
    }
}

export default Tweet
