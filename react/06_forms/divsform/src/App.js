import React, { Component } from 'react';
import './App.css';
import Div from './Div';
import DivForm from './DivForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divs: []
    };
    this.addChange = this.addChange.bind(this);
  }

  addChange(newDiv) {
    this.setState(prevState => {
      return { divs: [newDiv, ...prevState.divs] };
    });
  }

  render() {
    let divs = this.state.divs.map((el, idx) => {
      return (
        <Div
          key={idx}
          height={el.height + 'px'}
          width={el.width + 'px'}
          backgroundColor={el.color}
        />
      );
    });
    return (
      <div>
        <DivForm addChange={this.addChange} />
        {divs}
      </div>
    );
  }
}

export default App;
