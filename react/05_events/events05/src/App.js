import React, { Component } from 'react';
import './App.css';
import CustomLink from './components/CustomLink';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkEnabled: true
    };
    this.toggleLinks = this.toggleLinks.bind(this);
    this.toggleLinksOff = this.toggleLinksOff.bind(this);
    this.toggleLinksOn = this.toggleLinksOn.bind(this);
  }
  toggleLinks() {
    this.state.linkEnabled ? this.toggleLinksOff : this.toggleLinksOn;
  }

  toggleLinksOn() {
    this.setState(prevState => ({
      linkEnabled: true
    }));
  }

  toggleLinksOff() {
    this.setState(prevState => ({
      linkEnabled: false
    }));
  }

  areLinksOn() {
    this.state.linkEnabled ? (
      <p>The links are on!</p>
    ) : (
      <p>The links are off!</p>
    );
  }

  render() {
    return (
      <div className="App">
        <CustomLink />
        <button onClick={this.toggleLinks()} />
        <br />
        {this.areLinksOn}
      </div>
    );
  }
}

export default App;
