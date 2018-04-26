import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomLink from "./CustomLink";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchor_attr: this.props.active
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleClick() {
    console.log('Hiya!');
  }

  toggle() {
    if (this.state.anchor_attr[0].href !== "#") {
      console.log('this.state.anchor_attr[0].href is...', !!this.state.anchor_attr[0].href)
      console.log(this.props.disabled)
      this.setState({ anchor_attr: this.props.disabled }, () => console.log(this.state))
    } else {
      this.setState({ anchor_attr: this.props.active })
    }
  }

  render() {
    var anchorList = this.state.anchor_attr.map(attr => {
      return <CustomLink
        href={attr.href}
        text={attr.text}
        target={attr.target}
        handleClick={this.handleClick}
      />
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Events Exercise</h1>
        </header>
        {anchorList}
        <button onClick={this.toggle}>Toggle On/Off</button>
      </div>
    );
  }
}

App.defaultProps = {
  active: [{ href: "https://www.rithmschool.com/", text: "Rithm School", target: "_blank" },
  { href: "http://www.google.com", text: "Google", target: "_blank" },
  { href: "http://www.amazon.com", text: "Amazon", target: "_blank" }],
  disabled: [{ href: "#", text: "Rithm School", target: "" },
  { href: "#", text: "Google", target: "" },
  { href: "#", text: "Amazon", target: "" }]
};
