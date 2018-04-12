import React, { Component } from "react";

class Person extends Component {
  render() {
    let drinkAge = (+this.props.age < 21) ? <h3>you must be 21</h3> : <h3>have a drink!</h3>
    let name = (+this.props.name.length >= 8) ? <h2>{this.props.name.slice(0, 6)}</h2> : <h2>{this.props.name}</h2>
    return <div>
      <p>Learn some information about this person   </p>
      {name}
      {drinkAge}
      <ul>
        {this.props.hobbies.map(function (hobby) {
          return <li key={hobby}>{hobby}</li>
        })}
      </ul>
    </div>
  }
}

export default Person;
