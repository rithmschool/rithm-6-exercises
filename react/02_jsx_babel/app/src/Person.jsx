import React, { Component } from 'react';

class Person extends Component {
    render() {
        if(this.props.age > 21) {
            var msg = 'have a drink!'
        } else {
            var msg = 'you must be 21'
        }
        if(this.props.name.length > 8) {
            var name = this.props.name.slice(0, 6);
        } else {
            var name = this.props.name;
        }
        var hobbies = [];
        for(let i = 0; i < this.props.hobbies.length; i++) {
            hobbies.push(<li>{this.props.hobbies[i]}</li>)
        }
        return (
            <div>
                <p>Learn some information about this person</p>
                <h3>{name}, {msg}</h3>
                <ul className="hobbies">{hobbies}</ul>
            </div>
        )
    }
}

export default Person;