import React, { Component } from 'react';
import './App.css';

class Person extends Component {
  render() {
    let message = +this.props.age >= 21 ? 'have a drink!' : 'you must be 21';
    let name =
      this.props.name.length > 8
        ? this.props.name.slice(0, 6)
        : this.props.name;
    let hobbies = this.props.hobbies.map(hobby => <li>{hobby}</li>);
    return (
      <div>
        <p>
          <strong>Learn some information about this person</strong>
          <br />
          {name} is {this.props.age} -- {message}
          <br />
          Their hobbies include:
          <ul>{hobbies}</ul>
        </p>
      </div>
    );
  }
}

export default Person;
