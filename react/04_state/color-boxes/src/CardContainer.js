import React, { Component } from 'react';
import Card from './CardComponent.js';
import { choice } from './choiceHandler.js';
import './App.css';

export default class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: Array.from({ length: 24 }, () => choice(this.props.allColors))
    };
  }

  handleClick(idx) {
    this.setState(prevState => {
      let newColors = [...prevState.colors];
      newColors[idx] = choice(this.props.allColors);
      return { colors: newColors };
    });
  }

  render() {
    let allCards = this.state.colors.map((color, i) => (
      <Card
        key={i}
        color={color}
        handleClick={this.handleClick.bind(this, i)}
      />
    ));
    return (
      <div>
        <h1>I'm the square container!</h1>
        <div>{allCards}</div>
      </div>
    );
  }
}
CardContainer.defaultProps = {
  allColors: [
    'blue',
    'orange',
    'black',
    'gold',
    'purple',
    'Goldenrod',
    'ForestGreen',
    'IndianRed',
    'LightPink',
    'Salmon',
    'DarkOrchid',
    'DarkGoldenRod',
    'LightSeaGreen',
    'Moccasin',
    'Olive',
    'blue',
    'orange',
    'black',
    'gold',
    'purple',
    'Goldenrod',
    'ForestGreen',
    'IndianRed',
    'LightPink',
    'Salmon',
    'DarkOrchid',
    'DarkGoldenRod',
    'LightSeaGreen',
    'Moccasin',
    'Olive'
  ]
};
