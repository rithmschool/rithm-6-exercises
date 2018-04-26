import React from 'react';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

const TodoList = ({ todos, editTodo, deleteTodo, openEditor, markCompleted }) => {
    return (
        <div className="container mt-2 mx-auto">
            <ul className="list-group text-center">
                {todos.map((todo, i) => {
                    if(todos[i].isUnderEdit) {
                        return (
                            <EditTodoForm key={i} idx={i} closeEditor={this.closeEditor} editTodo={editTodo.bind(this, i)} todo={todo} />
                        )
                    } else {
                        return (
                            <Todo key={i} idx={i} title={todo.title} description={todo.description} completionStatus={todos[i].isCompleted} markCompleted={markCompleted.bind(this, i)} deleteTodo={deleteTodo.bind(this, i)} openEditor={openEditor.bind(this, i)} />
                        )
                    }
                })}
            </ul>
        </div>
    )
}

export default TodoList;