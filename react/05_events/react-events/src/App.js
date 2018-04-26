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
          disabled: false
        },
        {
          href: "https://www.reddit.com/",
          text: "Reddit",
          disabled: false
        },
        {
          href: "http://bleacherreport.com/",
          text: "Bleach Report",
          disabled: false
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target.text);
  }

  changeClass() {
    this.setState(prevState => {
      let newLinks = [...prevState];
      if (newLinks[0].disabled === false) {
        let newLink = newLinks.map(link => (link.disabled = true));
      } else {
        let newLink = newLinks.map(link => (link.disabled = false));
      }
      return { links: newLink };
    });
  }

  render() {
    let atags = this.state.links.map((link, i) => (
      <CustomLink
        key={i}
        href={link.href}
        text={link.text}
        handleClick={this.handleClick}
        disabled={link.disabled}
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
