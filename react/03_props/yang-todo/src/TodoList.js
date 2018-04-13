import React, { Component } from 'react';
import Todo from './Todo.js'

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
        this.addTodo = this.addTodo.bind(this);
    };

    addTodo(event) {
        this.setState({ 
            tasks: this.state.tasks.concat([event.target.task.value])
          })
        event.preventDefault()
        event.target.reset()
        return;
    }
    render() {
        console.log(this.state.tasks);
        var taskList = this.state.tasks.map((task,idx) => <Todo value={task} key={idx}/>
        );
        return (
            <div>
                <form onSubmit={this.addTodo}>
                <label> Todo List </label>
                <input type="text" name="task"/>
                <br/>
                <input type="submit" value="Submit"/>
                </form>
                <div>
                {taskList}
                </div>
            </div>
        )
    }
}