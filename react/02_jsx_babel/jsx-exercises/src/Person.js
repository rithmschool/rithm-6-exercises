import React, { Component } from 'react';

class Person extends Component {
  render() {
    let message;
    if (this.props.age < 21) {
      message = 'Nice try, Go home kid';
    } else {
      message = 'You get to go to the party!';
    }
    const hobbies = this.props.hobbies.map(hobby => {
      return <li>{hobby}</li>;
    });
    return (
      <div className="person">
        <p>Person: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <p>Status: {message}</p>
        <ul>{hobbies}</ul>
      </div>
    );
  }
}

export default Person;
