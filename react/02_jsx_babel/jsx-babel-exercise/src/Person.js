import React, { Component } from "react";

class Person extends Component {
  render() {
    let age = this.props.age;
    if (age > 21) {
      age = "have a drink!";
    } else {
      age = "you must be 21";
    }

    let name = this.props.name;
    if (name.length > 8) {
      name = name.slice(0, 7);
    }
    // let hobbies = this.props.hobbies;
    let hobbiesList = this.props.hobbies.map(hobby => {
      return <li>{hobby}</li>;
    });

    return (
      <div>
        <p>Learn some information about {name}!</p>
        <h3> {age} </h3>
        <h3>Hobbies</h3>
        <ul>{hobbiesList}</ul>
      </div>
    );
  }
}

export default Person;
