import React, { Component } from "react";

class Person extends Component {
  render() {
    let nameInput = this.props.name;
    let name =
      nameInput.length < 8 ?
        nameInput : nameInput.slice(0,8);
    let age = this.props.age;
    let message =
      age >= 21 ?
        (<h3>Have a drink!</h3>) : (<h3>You must be 21.</h3>);
    let displayHobbies = this.props.hobbies.map(hobby => {
      return (<li>{hobby}</li>)
    })
    return (
      <div className="Person" class="person">
        <p class="general">Learn some information about this person.</p>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Are you legal? {message}</p>
        <p>Hobbies: {displayHobbies}</p>
      </div>
    )
  }
}

export { Person };
