import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomLink from "./CustomLink";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: this.props.links,
      enabled: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleClick(e) {
    if (!this.state.enabled) {
      e.preventDefault();
    }
    console.log("you clicked on a link!");
  }

  toggle() {
    this.setState({ enabled: !this.state.enabled }, () =>
      console.log("Toggle button state: " + this.state.enabled)
    );
  }

  render() {
    let anchorList = this.state.links.map((attr, i) => {
      return (
        <li key={i}>
          <CustomLink
            href={attr.href}
            text={attr.text}
            target={attr.target}
            handleClick={this.handleClick}
          />
        </li>
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Events Exercise</h1>
        </header>
        <ul>{anchorList}</ul>
        <br />
        <button onClick={this.toggle}>
          {this.state.enabled ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}

App.defaultProps = {
  links: [
    {
      href: "https://www.reddit.com/",
      text: "Reddit",
      target: "_blank"
    },
    {
      href: "http://www.linkedin.com",
      text: "Linkedin",
      target: "_blank"
    },
    {
      href: "http://www.twitter.com",
      text: "Twitter",
      target: "_blank"
    }
  ]
};
