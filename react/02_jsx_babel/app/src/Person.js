import React, { Component } from "react";

class Person extends Component {
  render() {
    let name =
      this.props.name.length > 8
        ? this.props.name.slice(0, 6)
        : this.props.name;
    let age = this.props.age;
    let beer = age >= 21 ? "have a drink!" : "you must be 21";
    const hobbies = this.props.hobbies.map(hobby => {
      return <li>{hobby}</li>;
    });
    return (
      <div className="person">
        <p>Learn some information about this person!</p>
        <p>name: {name}</p>
        <p>age: {this.props.age}</p>
        <p>Can drink? -{beer}</p>
        <h4>Hobbies</h4>
        <ul className="hobbies">{hobbies}</ul>
      </div>
    );
  }
}

export default Person;
