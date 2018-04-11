import React, { Component } from 'react';

class Person extends Component {
  render() {
    let message;
    if (this.props.age < 21) {
      message = 'Nice try, Go home kid';
    } else {
      message = 'You get to go to the party!';
    }
    return (
      <div className="person">
        <p>Person: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <p>Status: {message}</p>
      </div>
    );
  }
}

export default Person;
