import React, { Component } from 'react';
import { Link }from 'react-router-dom';

class Todo extends Component {
    handleDelete = () => {
        this.props.deleteTodo();
        if(this.props.routeProps) {
            this.props.routeProps.history.push('/todos')
        }
    }
    
    render() {
        const { title, description, deleteTodo, markCompleted, completionStatus, openEditor, idx } = this.props;
        return (
            <li className={completionStatus ? "list-group-item mx-auto completed" : "list-group-item mx-auto"}>
                <div className="d-flex">
                    <span>
                        <h3 className="todo-title">
                            <Link to={`/todos/${idx}`}>{title}</Link>
                        </h3>
                    </span>
                    <span className="ml-auto my-auto">
                        <button className="btn btn-success btn-sm m-1" onClick={markCompleted}>
                            {<i className="fas fa-check"></i>}
                        </button>
                        <button className="btn btn-warning btn-sm m-1" onClick={openEditor}>
                            {<i className="fas fa-edit"></i>}
                        </button>
                        <button className="btn btn-danger btn-sm m-1" onClick={this.handleDelete}>
                            <i className="fas fa-times"></i>
                        </button>
                    </span>
                </div>
                <div className="text-left">
                    <h5 className="todo-description">{description}</h5>
                </div>
            </li>
        )
    }
}
// const Todo = ({ title, description, deleteTodo, markCompleted, completionStatus, openEditor, idx }) => (
//     <li className={completionStatus ? "list-group-item mx-auto completed" : "list-group-item mx-auto"}>
//         <div className="d-flex">
//             <span>
//                 <h3 className="todo-title">
//                     <Link to={`/todos/${idx}`}>{title}</Link>
//                 </h3>
//             </span>
//             <span className="ml-auto my-auto">
//                 <button className="btn btn-success btn-sm m-1" onClick={markCompleted}>
//                     {<i className="fas fa-check"></i>}
//                 </button>
//                 <button className="btn btn-warning btn-sm m-1" onClick={openEditor}>
//                     {<i className="fas fa-edit"></i>}
//                 </button>
//                 <button className="btn btn-danger btn-sm m-1" onClick={deleteTodo}>
//                     <i className="fas fa-times"></i>
//                 </button>
//             </span>
//         </div>
//         <div className="text-left">
//             <h5 className="todo-description">{description}</h5>
//         </div>
//     </li>
// )

export default Todo;