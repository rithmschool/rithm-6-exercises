import React, { Component } from 'react'
import Person from './Person'

class MultiPerson extends Component {
  render() {
    let people = [
      <Person name="Max" age="19" hobbies={["fart", "eat", "sleep"]} />,
      <Person name="Leo" age="25" hobbies={["chips", "mate", "salmon"]} />,
      <Person name="Sunny" age="2" hobbies={["sing", "cross country ski", "fruit"]} />
    ]
    return <p>{people}</p>
  }
}

export default MultiPerson
