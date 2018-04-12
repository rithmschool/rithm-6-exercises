import React, { Component } from "react";
import "./TweetComponent.css";

class PersonComponent extends Component {
  render() {
    let drink = this.props.age >= 21 ? "Have a drink!" : "You must be 21";
    let name =
      this.props.name.length > 8
        ? this.props.name.slice(0, 6)
        : this.props.name;
    let interests = this.props.interests.map(interest => {
      return <li>{interest}</li>;
    });
    return (
      <div className="Tweet">
        <h4>{name}</h4>
        <p>Learn some information about this person:</p>
        <p>Age: {this.props.age}</p>
        <ul className="flex column">Interests: {interests}</ul>
        <h3>{drink}</h3>
      </div>
    );
  }
}

export default PersonComponent;
