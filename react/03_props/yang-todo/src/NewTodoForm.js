import React, { Component } from 'react';
import Todo from './Todo.js'

export default class NewTodoForm extends Component {

    render() {
        return(
            <form onSubmit={this.props.addTodo}>
                <label> Todo List </label>
                <input type="text" name="task"/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}