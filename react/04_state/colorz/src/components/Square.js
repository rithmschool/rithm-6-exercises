import React from 'react';
import './Square.css';
console.log('Square.js - Imported dependancies');

const Square = ({ color, clickListener }) => (
  <div
    className="Square"
    style={{
      backgroundColor: color
    }}
    onClick={clickListener}
  />
);

// We create a functional component called Square.  By using the const keyword,
// we are not able to reassign anything else to this variable name.

// The function accepts a deconstructed object which has two of Square's parent's
// methods accepted as arguments (passed down from the parent) which implicitly
// returns a <div>.  The <div> is assigned the prop of className of 'Square' which
// allows us to target it with CSS. In JSX, className is analogous to class in
// traditional HTML.  It is built this way because class is a reserved JS word.

// Things I'm not 100% on..... the style prop seems to be receiving evaluated JSX
// expression - is this an object or a function?  Its being passed CSS color in JSX syntac but
// I am not 100% comfortable with this syntax.

// --------------------------------------------------------------------------------

// I tried doing this using the React.Component class but couldn't get this to work.
// I totally understand that its actually preferred to do a functional component for
// performance reasons if you don't need state and all the React.Component properties
// but I'd love to find out how do get the below code to work for education sake.

// class Square extends React.Component {
//   render(color, clickListener) {
//     console.log('Square.js - render()');
//     return (
//       <div
//         className="Square"
//         style={{ backgroundColor: color }}
//         onClick={clickListener}
//       />
//     );
//   }
// }

// We create the Square Component which extends from React.Component.
// This component is stateless as only the render method has been used,
// there is no constructor or super methods called here.

// Each instance of the Square component is a rendered <div> which is passed
// prop values/expressions from where it is called.

//---------------------------------------------------------------------------
// I feel like my understanding of this file could be better - there are a few holes
// in my knowedlge here.

export default Square;
