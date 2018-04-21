import React from "react";
import { withRouter } from "react-router-dom";
import Todo from "./Todo.js"

const todoList = ({ todoData }) => (
    <div>
        {todoData.map((data, i) => {
            return (
                <div>
                    <Todo key={i} idx={i} data={data} />
                </div>
            )
        })}
    </div>
);

export default withRouter(todoList);
