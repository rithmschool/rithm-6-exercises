import React, { Component } from 'react';
import { Route, Link, Switch, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import NewToDoForm from './NewToDoForm';
import ToDoList from './ToDoList';
import Todo from './Todo';

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
    this.setState(prevState => {
      return { todos: [...prevState.todos, newTodo] };
    });
  }

  removeToDo(id) {
    // debugger;
    // ask for redirect by setting it in state
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
            isEditSelected={this.isEditSelected}
            todos={this.state.todos}
          />
        </div>
      );
    };

    const renderTodoForm = props => {
      return (
        <div className="App">
          <h1>Dragon Todo List</h1>
          <NewToDoForm addToDo={this.addToDo} />
          {/* <TodoForm handleSubmit={this.addTodo} */}
          {/* <TodoForm handleSubmit={this.edito} */}
        </div>
      );
    };

    const renderSingleTodo = props => {
      //debugger;
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
            //need to figure out the best way to handle deleting a todo
            removeToDo={this.removeToDo.bind(this, props.match.params.id)}
            editToDo={this.editToDo.bind(this, props.match.params.id)}
            showEditForm={this.showEditForm.bind(this, props.match.params.id)}
            isEditSelected={targetTodo.isEditSelected}
            // {...props}
          />
        </div>
      );
    };

    // if we shoudl redirect, in your del method:
    //    - setState({redirect: true})

    // if your app/render
    //  if this.state.redirect:
    //     this.setState(redirect: false)
    //     return <Redirect to="/todos" />
    //  else:
    //     normal return
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
        <Route path="/todos/new" render={renderTodoForm} />
        <Route
          path="/todos/:id"
          render={renderSingleTodo}
          // render={props => {
          //   //debugger;
          //   const targetTodo = this.state.todos.filter(
          //     (todo, i) => +props.match.params.id === i
          //   )[0];
          //   return (
          //     <div className="App">
          //       <h1>Dragon Todo List</h1>
          //       <Link to="/todos">Back To All Todos</Link>
          //       <Todo
          //         // key={i}
          //         //so i can render show and edit routes
          //         // id={i}
          //         title={targetTodo.title}
          //         description={targetTodo.description}
          //         isCompleted={targetTodo.isCompleted}
          //         markAsComplete={this.markAsComplete.bind(
          //           this,
          //           props.match.params.id
          //         )}
          //         // markAsComplete={this.markAsComplete.bind(
          //         //   this,
          //         //   props.match.params.id
          //         // )}
          //         removeToDo={this.removeToDo.bind(this, props.match.params.id)}
          //         // editToDo={this.state.editToDo.bind(
          //         //   this,
          //         //   props.match.params.id
          //         // )}
          //         // showEditForm={this.state.showEditForm.bind(
          //         //   this,
          //         //   props.match.params.id
          //         // )}
          //         // isEditSelected={targetTodo.isEditSelected}
          //         todo={
          //           this.state.todos.filter(
          //             (todo, i) => props.match.params.id === i
          //           )[0]
          //           // {...props}
          //         }
          //       />
          //     </div>
          //   );
          // }}
        />
        <Route
          path="/todos/:id/edit"
          render={() => {
            console.log('yay');
          }}
        />
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

export default App;
