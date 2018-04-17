import React, { Component } from 'react';
import './App.css';
import NewToDoForm from './NewToDoForm';
import ToDoList from './ToDoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: Array.from({ length: this.props.Todos.length }).map(
        (item, index) => {
          return {
            ...this.props.Todos[index],
            isCompleted: false,
            isEditSelected: false
          };
        }
      )
    };
    this.markAsComplete = this.markAsComplete.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
    this.addToDo = this.addToDo.bind(this);
    this.editToDo = this.editToDo.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
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

  editToDo(index, e) {
    e.preventDefault();
    //it didn't let me process these inside of setState, why not?
    // 'synthetic object' error
    //i don't want to remove this, i want to grab the whole state?
    let newTitle = { [e.target[0].name]: e.target[0].value };
    let newDescription = { [e.target[1].name]: e.target[1].value };
    this.setState(prevState => {
      let todosCopy = [...prevState.todos];
      if (newTitle['title'].length < 1) newTitle.title = todosCopy[index].title;
      if (newDescription['description'].length < 1)
        newDescription.description = todosCopy[index].description;
      todosCopy[index] = {
        ...newTitle,
        ...newDescription
      };
      return { todos: todosCopy };
    });
  }

  showEditForm(index) {
    this.setState(prevState => {
      let todosCopy = [...prevState.todos];
      todosCopy[index].isEditSelected = !todosCopy[index].isEditSelected;
      console.log(todosCopy);
      return { todos: todosCopy };
    });
  }

  markAsComplete(index) {
    this.setState(prevState => {
      let todosCopy = [...prevState.todos];
      todosCopy[index].isCompleted = !todosCopy[index].isCompleted;
      return { todos: todosCopy };
    });
  }
  render() {
    return (
      <div className="App">
        <NewToDoForm addToDo={this.addToDo} />
        <ToDoList
          key={0}
          markAsComplete={this.markAsComplete}
          removeToDo={this.removeToDo}
          editToDo={this.editToDo}
          showEditForm={this.showEditForm}
          isEditSelected={this.isEditSelected}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

App.defaultProps = {
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

export default App;
