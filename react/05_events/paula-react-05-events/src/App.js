import React, { Component } from "react";
import CustomLink from "./CustomLink";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasActiveLinks: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.disableLinks = this.disableLinks.bind(this);
  }

  handleClick(e) {
    if (this.state.hasActiveLinks) {
      console.log("you clicked on a link!");
    } else {
      e.preventDefault();
    }
  }

  disableLinks() {
    this.setState(prevState => ({ hasActiveLinks: !prevState.hasActiveLinks }));
  }

  render() {
    const buttonText = this.state.hasActiveLinks ? "disable" : "enable";
    const links = this.props.links.map((l, i) => (
      <CustomLink
        href={l.href}
        text={l.text}
        handleClick={this.handleClick}
        key={i}
      />
    ));
    return (
      <section className="App">
        <h2>Links:</h2>
        {links}
        <button onClick={this.disableLinks}>
          click here to {buttonText} links!
        </button>
      </section>
    );
  }
}

App.defaultProps = {
  links: [
    {
      text: "click here to follow hank the mini pig!",
      href: "https://www.instagram.com/hanktheminipig/"
    },
    {
      text: "click here to follow rudy the pink nosed pig!",
      href: "https://www.instagram.com/rudythepinknosedpig/"
    },
    {
      text: "click here to follow pig deal dawson!",
      href: "https://www.instagram.com/pigdealdawson/"
    }
  ]
};

export default App;
