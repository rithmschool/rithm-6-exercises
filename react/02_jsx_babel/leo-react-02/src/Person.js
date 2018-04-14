import React, { Component } from 'react';

class Person extends Component {
    render(){
            let name = "Leo";
            let age = this.props.age;
            function haveDrink (age) {
                if (age >= 21) {
                    return "You can have a drink!"
                } else {
                    return "Sorry, you can't drink!"
                }
            let hobbies = this.props.hobbies.map(hobby => {
                return <li>{hobby}</li>;
            });
            
            } 
    }
    return ();
}