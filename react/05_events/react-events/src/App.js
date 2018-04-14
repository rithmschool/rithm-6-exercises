import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomLink from "./CustomLink";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          href: "https://www.google.com/",
          text: "Google",
          disabled: ""
        },
        {
          href: "https://www.reddit.com/",
          text: "Reddit",
          disabled: ""
        },
        {
          href: "http://bleacherreport.com/",
          text: "Bleach Report",
          disabled: ""
        }
      ],
      disabled: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target.text);
  }
  changeClass() {
    let newLinks = [...this.state.links];
    if (!newLinks[0].disabled === "enabled") {
      newLinks.map(link => (
        
      ))
    }
  }
  render() {
    let atags = this.state.links.map((link, i) => (
      <CustomLink
        key={i}
        href={link.href}
        text={link.text}
        handleClick={this.handleClick}
        disabled={this.state.disabled}
      />
    ));
    return (
      <div className="App">
        {atags}
        <button onClick={this.changeClass}>ClickMe</button>
      </div>
    );
  }
}

export default App;
