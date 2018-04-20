import React, { Component } from "react";
import CustomLink from "./CustomLink";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: true };
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleButtonClick() {
    this.state.clicked
      ? this.setState({ clicked: false })
      : this.setState({ clicked: true });
  }

  handleLinkClick(event) {
    console.log("clicked");
    this.state.clicked
      ? console.log("You clicked on a link!")
      : event.preventDefault();
  }

  render() {
    let allLinks = this.props.links.map((link, idx) => {
      if (this.state.clicked) {
        return (
          <CustomLink
            key={idx}
            text={link.text}
            onClick={this.handleLinkClick}
            href={link.href}
          />
        );
      } else {
        return (
          <CustomLink
            key={idx}
            text={link.text}
            onClick={this.handleLinkClick}
          />
        );
      }
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Custom Link</h1>
        </header>
        {allLinks}
        <br />
        <input
          onClick={this.handleButtonClick.bind(this)}
          type="submit"
          value={
            this.state.clicked ? this.props.btnText[0] : this.props.btnText[1]
          }
        />
      </div>
    );
  }
}

App.defaultProps = {
  links: [
    {
      library: "Angular JS",
      href: "https://angularjs.org/",
      text: "Go to Angular JS"
    },
    {
      library: "Node JS",
      href: "https://nodejs.org/en/",
      text: "Go to Node JS"
    },
    {
      library: "React JS",
      href: "https://reactjs.org/",
      text: "Go to React JS"
    }
  ],
  btnText: ["Disable Links", "Enable Links"]
};

export default App;
