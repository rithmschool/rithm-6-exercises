import React, { Component } from 'react';
import Card from './CardComponent.js';

export default class CardContainer extends Component {
  constructor(props) {
    super(props);
    (this.state = {
      colors: [
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
    }),
      (this.changeColor = this.changeColor.bind(this)),
      (this.shuffle = this.shuffle.bind(this));
  }

  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  changeColor() {
    let shuffledColors = this.shuffle(this.state.colors);
    let randomNumber = Math.floor(Math.random() * shuffledColors.length); // returns a number between 0 and 9
    return shuffledColors[randomNumber];
  }

  render() {
    let listOfBoxes = this.state.colors.map((color, index) => {
      return (
        <Card
          otherColor={this.changeColor.bind(this)}
          color={this.changeColor()}
          key={index}
        />
      );
    });
    return <div>{listOfBoxes}</div>;
  }
}
