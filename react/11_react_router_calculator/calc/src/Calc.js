import React from 'react';

const Calc = props => {
  console.log(props);
  console.log(props.location);
  let { operation, a, b } = props.match.params;
  if (operation === 'add') return 'The answer to this problem is: ' + (+a + +b);
  if (operation === 'subtract')
    return 'The answer to this problem is: ' + (+a - +b);
  if (operation === 'divide')
    return 'The answer to this problem is: ' + +a / +b;
  if (operation === 'multiply')
    return 'The answer to this problem is: ' + +a * +b;
  return 'Invalid Operation';
};

export default Calc;
