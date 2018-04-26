import React from 'react';
import './Todo.css';

const Todo = ({
  title,
  description,
  isComplete,
  toggleBeingUpdated,
  toggleIsComplete,
  removeTodo
}) => (
  <li>
    <span className={isComplete ? 'Todo--isComplete' : 'Todo--notComplete'}>
      {title}: {description}
    </span>{' '}
    <button onClick={toggleBeingUpdated}>Edit</button>{' '}
    <button onClick={toggleIsComplete}>Complete</button>{' '}
    <button onClick={removeTodo}>Remove</button>
  </li>
);

// above: stateless functional component
// below: class

// export default class Todo extends Component {
//   render() {
//     return (
//       <li>
//         <span className={this.props.isComplete ? 'Todo--isComplete' : 'Todo--notComplete'}>
//           {this.props.title}: {this.props.description}
//         </span>{' '}
//         <button onClick={toggleBeingUpdated}>Edit</button>{' '}
//         <button onClick={this.props.toggleIsComplete}>Mark Complete</button>{' '}
//         <button onClick={this.props.removeTodo}>Remove!</button>
//       </li>
//     );
//   }
// }

export default Todo;
