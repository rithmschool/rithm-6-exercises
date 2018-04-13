import React, { Component } from 'react';
import { throwStatement } from 'babel-types';

class Person extends Component {
  render() {
    let hobbies = this.props.hobbies.map(hobby => {
      return <li>{hobby}</li>;
    });
    let message = +this.props.age > 21 ? 'Have a drink!' : 'You must be 21';
    let name =
      this.props.name.length > 9
        ? this.props.name.slice(0, 6)
        : this.props.name;
    return (
      <div>
        <p>Learn some information about this person</p>
        <h2>
          {this.props.name.length > 8
            ? this.props.name.slice(0, 6)
            : this.props.name}
        </h2>
        <h3>{message}</h3>
        <ul>{hobbies}</ul>
      </div>
    );
  }
}

export default Person;
