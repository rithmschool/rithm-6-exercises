import React from "react";
import { Link } from "react-router-dom";

const Todo = ({ data, idx }) => (
    <div> 
        <p>
            {data} 
        </p>
     
     <Link to={`/todos/${idx}/edit`}>Edit</Link>
    </div>
)

export default Todo