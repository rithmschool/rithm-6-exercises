import React, { Component } from 'react';
import Person from './PersonComponent.js';

class MultiPersons extends Component {
  render() {
    let people = [
      <Person age="26" name="Max" hobbies={['GOLF', 'MUSIC', 'COFFEE']} />,
      <Person age="30" name="Mark" hobbies={['GOLF', 'MUSIC', 'COFFEE']} />,
      <Person age="25" name="Yang" hobbies={['GOLF', 'MUSIC', 'COFFEE']} />
    ];
    return <p>{people}</p>;
  }
}

export default MultiPersons;
