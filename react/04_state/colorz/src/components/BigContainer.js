import React, { Component } from 'react';
import Square from './Square';
import randomizer from '../helpers/randomizer';
console.log('BigContainer.js - Imported dependancies.');

class BigContainer extends Component {
  constructor(props) {
    super(props);
    // Line 6-8
    // We are declaring a BigContainer component which 'inherits' (using term loosely)
    // properties from the React.Component class.  We then call the constructor()
    // method which gives the BigContainer component the power to create instances
    // of its own class which inherits given methods and properties, such as state.
    // Calling super instructs BigComponent to firstly inherit the properties of its
    // parent component (React.Component)

    this.state = {
      colorz: Array.from({ length: 24 }, () => randomizer(this.props.allColorz))
    };
    // Line 9-11
    // This is assigns the initial state to a component (the state is an object) which
    // has the key of `colorz`.  They key of `colorz` is passed the method of
    // Array.from() which instantiates a new Array from provided iterable object.

    // Array.from() accepts two parameters, firstly the { length: 24 } object which
    // specifies the length of the new Array.  The second parameter is an annoymous
    // function which returns the result of the randomizer function when passed all
    // the array of all the possible colors. This has been imported from the
    // ./helpers/randomizer.js file.
  }

  clickListener(i) {
    this.setState(prevState => {
      let newColorz = prevState.colorz.slice();
      // let newColors = [...prevState.colors];  // Matt did it this way and its gross.
      newColorz[i] = randomizer(this.props.allColorz);
      return { colorz: newColorz };
    });
  }
  // Line 30-37
  // We are creating a method on BigContainer called clickListener which accepts an
  // argument of an index. We call setState() and pass the previous state to an annoymous
  // function.  We first create a copy of the previous state. We do this because we DO NOT
  // want to modify the state directly so we can use time travel later if we so desire!
  // In this case, because the state is just one array, we'll use the array method, .slice()
  // to create a copy of the array.

  // We then declare that the value at the index of the newColorz array (newColorz[i]) is
  // now to be the returned value of the randomizer function which is passed an array of
  // all the possible colors.
  //
  // At the end, we return a new object which contains the new state, which contains a key
  // of 'colorz' which features a new array with one of it's indexed values changed to a
  // random color picked from the allColorz array prop.

  render() {
    console.log('BigContainer.js - render()');
    let arrayOfChildComponents = this.state.colorz.map((color, i) => (
      <Square
        key={i}
        color={color}
        clickListener={this.clickListener.bind(this, i)}
      />
    ));
    return (
      <div className="BigContainer">
        <h1>This is a heading at the top of this BigContainer!</h1>
        <div>{arrayOfChildComponents}</div>
      </div>
    );
  }
  // We run the render() method which is 'inherited' from the React.Component parent class.
  // We declare a new variable within the render() function called 'arrayOfChildComponents',
  // which maps over the BigContainer's (the context of .this) state's (an object) property
  // of 'colorz' which is an array of colors.  The first parameter of the map() function
  // is an annoymous callback function which accepts a color and an index (i) as arguments
  // which are passed to the returned expression.

  // The returned expression is the functional (stateless) Square component.
  // Map() goes through each index of the 'colorz' array in the state object and returns an
  // instance of the Square component for every index in the array.
}

BigContainer.defaultProps = {
  allColorz: [
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
    'OrangeRed',
    'RoyalBlue',
    'Navy',
    'Blue'
  ]
};
// These are all the default props which are passed to the BigContainer
// component if no props are passed when an instance of BigContainer is
// created

//-----------------------------
//Overall I feel pretty solid on my understanding of this BigContainer.js file.

export default BigContainer;
