import React, { Component } from 'react';

class Person extends Component {
  render() {
    let pass = <h3>Have a drink!</h3>;
    let fail = <h3>Your must be 21</h3>;
    let name = this.props.name;

    let canDrink = () => {
      if (this.props.age >= 21) {
        return pass;
      } else {
        return fail;
      }
    };

    let first6char = name => {
      let result = '';
      for (let i = 0; i <= 5; i++) {
        result += name[i];
      }
      return result;
    };

    let nameCount = name => {
      if (this.props.name.length > 8) {
        return <div>{first6char(name)}</div>;
      } else {
        return <div>{name}</div>;
      }
    };

    let displayHobbies = () => {
      let hobbies = this.props.hobbies;
      return hobbies.map(function(hobby) {
        return <li>{hobby}</li>;
      });
    };

    return (
      <div>
        Learn some information about this person - <b>{nameCount(name)}</b> Can{' '}
        {name} drink...? {canDrink(name)}
        <br />
        {displayHobbies()}
        <br />
      </div>
    );
  }
}

export default Person;

//   for (let i = 0; i < hobbies.length; i++) {
//     console.log('looping through hobbies');
//     <li>{hobbies[i]}</li>;
