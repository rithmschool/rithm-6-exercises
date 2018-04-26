import React, { Component } from 'react';
import Todo from './Todo.js'
import NewTodoForm from "./NewTodoForm.js"

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
                <NewTodoForm addTodo={this.addTodo} />
                {taskList}
            </div>
        )
    }
}