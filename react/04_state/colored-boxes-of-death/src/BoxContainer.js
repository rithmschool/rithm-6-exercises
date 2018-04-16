import React, { Component } from 'react';
import Box from './Box.js';

class BoxContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColors: Array.from({ length: 24 }, () => {
        return this.getRandomElement(this.props.colors);
      })
    };
    this.getRandomElement = this.getRandomElement.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getRandomElement(arr) {
    const randomNum = Math.floor(Math.random() * arr.length);
    return arr[randomNum];
  }

  handleClick(index) {
    this.setState(prevState => {
      let colorsCopy = [...prevState.currentColors];
      colorsCopy[index] = this.getRandomElement(this.props.colors);
      return {
        currentColors: colorsCopy
      };
    });
  }

  render() {
    console.log(this.state.currentColors);
    const colorDivs = this.state.currentColors.map((color, index) => {
      return (
        <Box
          key={index}
          handleClick={this.handleClick.bind(this, index)}
          color={color}
        />
      );
    });
    return (
      <div>
        <h1>Box City Box City</h1>
        <main
          className="App"
          style={{
            width: '550px',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {colorDivs}
        </main>
      </div>
    );
  }
}

BoxContainer.defaultProps = {
  colors: [
    'Bisque',
    'BlanchedAlmond',
    'BurlyWood',
    'CornflowerBlue',
    'DarkMagenta',
    'DarkSalmon',
    'Gainsboro',
    'HoneyDew',
    'HotPink',
    'Khaki',
    'LawnGreen',
    'LightCoral',
    'LemonChiffon',
    'LightSeaGreen',
    'LimeGreen',
    'Maroon',
    'MistyRose',
    'OliveDrab',
    'OrangeRed'
  ]
};

export default BoxContainer;
