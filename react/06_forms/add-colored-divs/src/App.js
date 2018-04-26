import React, { Component } from 'react';
import './App.css';
import AddDivForm from './AddDivForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divs: []
    };
    this.addDiv = this.addDiv.bind(this);
  }

  addDiv(newDiv) {
    console.log(newDiv);
    this.setState(prevState => {
      //Alternative technique
      // divs: [...prevState.divs, newDiv]
      return { divs: [...prevState.divs, newDiv] };
    });
  }

  render() {
    const divs = this.state.divs.map((div, i) => {
      return (
        <div
          key={i}
          style={{
            width: `${div.width}px`,
            height: `${div.height}px`,
            backgroundColor: div.backgroundColor,
            margin: '5px'
          }}
        >
          I am a div
        </div>
      );
    });
    return (
      <div className="App">
        <p>murph</p>
        <AddDivForm addDiv={this.addDiv} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {divs}
        </div>
      </div>
    );
  }
}

export default App;
