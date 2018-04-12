import React, { Component } from "react";
import "./Person.css";

class Person extends Component {
  render() {
    let age = this.props.age;
    if (age > 21) {
      age = "Have a drink! You're over 21!";
    } else {
      age = "Awww too bad. You must be 21";
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
      <div className="Person">
        <p className="title__learn">Learn some information about {name}!</p>
        <h3>
          Age: {this.props.age}. {age}{" "}
        </h3>
        <h3>Hobbies</h3>
        <ul>{hobbiesList}</ul>
      </div>
    );
  }
}

export default Person;
