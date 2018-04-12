import React, { Component } from "react";

class Person extends Component {
  render() {
    let name = this.props.name;
    let age = this.props.age;
    if (name.length > 6) name = name.slice(0, 6);
    let beer = age >= 21 ? "have a drink!" : "you must be 21";
    const hobbyList = this.props.hobbies.map(hobby => {
      return (
        <li key={hobby.id}>
          <h2>{hobby.name}</h2>
        </li>
      );
    });
    return (
      <div className="person">
        <p>Learn some information about this person!</p>
        <p>name: {this.props.name}</p>
        <p>age: {this.props.age}</p>
        <p>Can drink? -{beer}</p>
        <ul className="hobbies">{hobbyList}</ul>
      </div>
    );
  }
}

export default Person;
