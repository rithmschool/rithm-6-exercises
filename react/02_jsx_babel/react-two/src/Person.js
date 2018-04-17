import React, { Component } from "react";

class Person extends Component {
  render() {
    let message;
    if (this.props.age > 21) {
      message = "Have a drink!";
    } else {
      message = "You must be 21!";
    }

    let name;
    if (this.props.name.length > 8) {
      name = this.props.name.slice(0, 6);
    } else {
      name = this.props.name;
    }

    let list;
    let hobbieArray = [];
    let hobbies = this.props.hobbies;
    for (let i = 0; i < hobbies.length; i++) {
      hobbieArray.push(<li key={i}>{hobbies[i]}</li>);
    }

    return (
      <div>
        <h2>Learn some information about {name}:</h2>
        <p>{message}</p>
        <h4>Favorite Hobies:</h4>
        <ul>{hobbieArray}</ul>
      </div>
    );
  }
}


     

export default Person;
