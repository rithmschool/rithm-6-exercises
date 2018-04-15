import React, { Component } from 'react';
import Todo from './Todo';
import NewToDoForm from './NewToDoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: Array.from({ length: this.props.Todos.length }).map(
        (item, index) => {
          return { ...this.props.Todos[index], isCompleted: 'false' };
        }
      )
    };
    this.markAsComplete = this.markAsComplete.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
    this.addToDo = this.addToDo.bind(this);
  }

  addToDo(newTodo) {
    this.setState(prevState => {
      return { todos: [...prevState.todos, newTodo] };
    });
  }

  removeToDo(index) {
    this.setState(prevState => {
      console.log(prevState.todos);
      let todosCopy = [...prevState.todos].filter((todo, i) => {
        if (i !== index) return todo;
      });
      console.log(todosCopy);
      return { todos: todosCopy };
    });
  }

  markAsComplete(index) {
    console.log('clicked');
    console.log(index);
    this.setState(prevState => {
      let todosCopy = [...prevState.todos];
      todosCopy[index].isCompleted = !todosCopy[index].isCompleted;
      console.log(todosCopy);
      return { todos: todosCopy };
    });
  }

  render() {
    let Todos = this.state.todos.map(
      ({ title, description, isCompleted }, i) => {
        return (
          <Todo
            key={i}
            title={title}
            description={description}
            isCompleted={isCompleted}
            //still don't really get the bind(i) part
            markAsComplete={this.markAsComplete.bind(this, i)}
            removeToDo={this.removeToDo.bind(this, i)}
          />
        );
      }
    );
    return (
      <div>
        <NewToDoForm addToDo={this.addToDo} />
        {Todos}
      </div>
    );
  }
}

TodoList.defaultProps = {
  Todos: [
    {
      title: 'wake up',
      description: 'wake up and stuff.'
    },
    {
      title: 'attack',
      description: 'attack without mercy.'
    },
    {
      title: 'chill',
      description: 'just sorta chill or whatever.'
    }
  ]
};

export default TodoList;
