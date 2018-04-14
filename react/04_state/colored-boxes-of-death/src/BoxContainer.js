import React, { Component } from 'react';
import Box from './Box.js';

class BoxContainer extends Component {
  render() {
    const random = arr => {
      let randomElement = Math.floor(Math.random() * arr.length);
      return arr[randomElement];
    };
    const colorDivs = this.props.colors.map((color, index, colors) => {
      const randomColor = random(colors);
      return (
        <li>
          <Box onClick={() => this.setState({})} color={randomColor} />
        </li>
      );
    });
    return <div className="App">{colorDivs}</div>;
  }
}

BoxContainer.defaultProps = {
  colors: ['red', 'blue', 'green', 'purple', 'peru']
};

export default BoxContainer;
