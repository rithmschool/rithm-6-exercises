import React, { Component } from 'react';
import './App.css';
import CustomLink from './components/CustomLink';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkEnabled: true,
      href: 'https://www.google.com',
      text: 'Google'
    };
    this.toggleLinks = this.toggleLinks.bind(this);
    this.toggleLinksOff = this.toggleLinksOff.bind(this);
    this.toggleLinksOn = this.toggleLinksOn.bind(this);
    this.areLinksOn = this.areLinksOn.bind(this);
  }
  noOfComponents = Array.from({ length: 3 });
  // originalLink = this.state.href; // This caused the app to crash - not sure why?

  toggleLinks() {
    console.log('toggleLinks()');
    this.state.linkEnabled ? this.toggleLinksOff() : this.toggleLinksOn();
  }

  toggleLinksOn() {
    console.log('toggleLinksOn()');
    this.setState(prevState => ({
      linkEnabled: true,
      href: prevState.href,
      text: prevState.text
    }));
  }
  // Disabling links works great, but I can't think of how to correctly pass the (previous, previous) state

  toggleLinksOff() {
    console.log('toggleLinksOff()');
    this.setState(prevState => ({
      linkEnabled: false,
      href: null,
      text: prevState.text
    }));
  }

  areLinksOn() {
    var result;
    this.state.linkEnabled
      ? (result = <p>The links are on!</p>)
      : (result = <p>The links are off!</p>);
    return result;
  }

  render() {
    var renderLinks = this.noOfComponents.map(links => {
      return (
        <CustomLink
          href={this.state.href}
          text={this.state.text}
          {...this.state}
        />
      );
    });
    return (
      <div className="App">
        <h1>This is the events05 app.</h1>
        {renderLinks}
        <br />
        <button onClick={this.toggleLinks}>Disable ALL the links!</button>
        <br />
        {this.areLinksOn()}
      </div>
    );
  }
}

export default App;
