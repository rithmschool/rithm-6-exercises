import React, { Component } from 'react';
import { Route, Link, Switch, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import NewToDoForm from './NewToDoForm';
import ToDoList from './ToDoList';
import Todo from './Todo';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: Array.from({ length: this.props.Todos.length }).map((item, id) => {
        return {
          ...this.props.Todos[id],
          isCompleted: false,
          isEditSelected: false
        };
      }),
      redirect: false
    };
    this.markAsComplete = this.markAsComplete.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
    this.addToDo = this.addToDo.bind(this);
    this.editToDo = this.editToDo.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
  }

  addToDo(newTodo) {
    console.log('adding todo');
    this.setState(prevState => {
      return { todos: [...prevState.todos, newTodo] };
    });
  }

  removeToDo(id) {
    this.setState(prevState => {
      let todosCopy = [...prevState.todos].filter((todo, i) => {
        if (i === +id) return undefined;
        return todo;
      });
      console.log(todosCopy);
      return { todos: todosCopy, redirect: true };
    });
  }

  editToDo(id, editedTodo) {
    console.log('in edit to do');
    this.setState(prevState => {
      let todosCopy = [...prevState.todos];
      todosCopy[id] = {
        ...editedTodo
      };
      return { todos: todosCopy };
    });
  }

  showEditForm(id) {
    this.setState(prevState => {
      let todosCopy = [...prevState.todos];
      todosCopy[id].isEditSelected = !todosCopy[id].isEditSelected;
      console.log(todosCopy);
      return { todos: todosCopy };
    });
  }

  markAsComplete(id) {
    this.setState(prevState => {
      let todosCopy = [...prevState.todos];
      todosCopy[id].isCompleted = !todosCopy[id].isCompleted;
      return { todos: todosCopy };
    });
  }
  render() {
    const renderTodoList = props => {
      return (
        <div className="App">
          <h1>Dragon Todo List</h1>
          <Link to="/todos/new">Add New Todo</Link>
          <ToDoList
            key={0}
            markAsComplete={this.markAsComplete}
            removeToDo={this.removeToDo}
            editToDo={this.editToDo}
            showEditForm={this.showEditForm}
            todos={this.state.todos}
          />
        </div>
      );
    };

    const renderNewTodoForm = props => {
      return (
        <div className="App">
          <h1>Dragon Todo List</h1>
          <NewToDoForm submitData={this.addToDo} />
        </div>
      );
    };

    const renderEditForm = props => {
      return (
        <div className="App">
          <h1>Dragon Todo List</h1>
          <p>Edit Todo</p>
          <NewToDoForm
            submitData={this.editToDo.bind(this, props.match.params.id)}
          />
        </div>
      );
    };

    const renderSingleTodo = props => {
      const targetTodo = this.state.todos.filter(
        (todo, i) => +props.match.params.id === i
      )[0];
      return (
        <div className="App">
          <h1>Dragon Todo List</h1>
          <Link to="/todos">Back To All Todos</Link>
          <Todo
            title={targetTodo.title}
            description={targetTodo.description}
            isCompleted={targetTodo.isCompleted}
            markAsComplete={this.markAsComplete.bind(
              this,
              props.match.params.id
            )}
            removeToDo={this.removeToDo.bind(this, props.match.params.id)}
            submitData={this.editToDo.bind(this, props.match.params.id)}
            showEditForm={this.showEditForm.bind(this, props.match.params.id)}
            isEditSelected={targetTodo.isEditSelected}
          />
        </div>
      );
    };

    {
      if (this.state.redirect) {
        this.setState(prevState => {
          let newState = { ...prevState };
          newState.redirect = false;
          return { ...newState };
        });
        return <Redirect to="/todos" />;
      }
    }
    return (
      <Switch>
        <Route path="/todos" exact render={renderTodoList} />
        <Route path="/todos/new" render={renderNewTodoForm} />
        <Route path="/todos/:id/edit" render={renderEditForm} />
        <Route path="/todos/:id" render={renderSingleTodo} />
        <Redirect to="/todos" />
      </Switch>
    );
  }
}

App.defaultProps = {
  Todos: [
    {
      title: 'wake up',
      description: 'wake up and chill with all my treasure.'
    },
    {
      title: 'attack',
      description: 'attack all without mercy.'
    },
    {
      title: 'burn stuff',
      description: 'Breath fire on the countryside.'
    },
    {
      title: 'chill with mom',
      description: 'hang out with my mom.'
    }
  ]
};

App.PropTypes = {
  Todos: PropTypes.arrayOf(PropTypes.object)
};

export default App;
