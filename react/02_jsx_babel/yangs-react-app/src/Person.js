import React, { Component } from "react";

var message = ''; 
class Person extends Component {
    render() {
        const hobbyList = this.props.hobbies.map(hobby => {
            return (
                <li>{hobby}</li>
            )
        })
        if (this.props.age > 21) {
            message = 'Have a drink!';
        }
        return (
            <div className="Person">
                <p> name: {this.props.name} age: {this.props.age}. </p>
                <p>{message}</p>
                <p> Hobbies include:  </p>
                <ul>{hobbyList}</ul>
            </div>
        );
    }
}

export default Person;
