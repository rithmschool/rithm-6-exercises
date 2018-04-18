import React, { Component } from 'react';
import logo from './logo.svg';
import DivForm from './DivForm';
import Div from '.NewDiv';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divs: [],
      divCount: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState(prevState => ({
      divs: [e, ...prevState.divs],
      divCount: prevSate.divCount + 1
    }));
  }

  render() {
    let divs = this.state.divs.map((div, idx) => {
      return (
        <Div
          key={idx}
          height={div.height + 'px'}
          width={div.width + 'px'}
          backgroundColor={div.color}
        />
      );
    });
    return (
      <div>
        <DivForm handleChange={this.handleChange} />
        <div>{divs}</div>
      </div>
    );
  }
}

export default App;
