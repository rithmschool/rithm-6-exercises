import React, { Component } from "react";
import "./App.css";

class PersonComponent extends Component {
  render() {
    let drinkAge = +this.props.age < 21 ? "you must be 21" : "have a drink!";
    let name =
      this.props.name.length >= 8
        ? this.props.name.slice(0, 6)
        : this.props.name;
    let hobbies = this.props.hobbies.map(hobby => {
      return <li>{hobby}</li>;
    });

    return (
      <div>
        <p>Learn some information about this person</p>
        <h2>
          {name} is {this.props.age} years old
        </h2>
        <h3>{drinkAge}</h3>
        <p>Hobbies</p>
        <ul>{hobbies}</ul>
        <hr />
      </div>
    );
  }
}

export default PersonComponent;
