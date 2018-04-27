import React from 'react';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

const TodoList = ({ todos, editTodo, deleteTodo, openEditor, markCompleted }) => {
    return (
        <div className="container mt-2 mx-auto">
            <ul className="list-group text-center">
                {todos.map((todo) => {
                    if(todo.isUnderEdit) {
                        return (
                            <EditTodoForm key={todo.idx} idx={todo.idx} closeEditor={this.closeEditor} editTodo={editTodo.bind(this, todo.idx)} todo={todo} />
                        )
                    } else {
                        return (
                            <Todo key={todo.idx} idx={todo.idx} title={todo.title} description={todo.description} completionStatus={todo.isCompleted} markCompleted={markCompleted.bind(this, todo.idx)} deleteTodo={deleteTodo.bind(this, todo.idx)} openEditor={openEditor.bind(this, todo.idx)} />
                        )
                    }
                })}
            </ul>
        </div>
    )
}

export default TodoList;