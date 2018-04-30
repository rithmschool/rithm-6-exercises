import React, { Component } from 'react';

class CustomLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkEnabled: true
    };

    this.linkFunc = this.linkFunc.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  link = this.props.href;

  linkFunc() {
    var result;
    this.state.linkEnabled ? (result = this.props.href) : (result = '');
    return result;
  }

  handleClick() {
    console.log('You clicked on the link!');
  }

  render() {
    return (
      <div>
        <br />
        <a href={this.props.href} target="_blank" onClick={this.handleClick}>
          {this.props.text}
        </a>
      </div>
    );
  }
}

CustomLink.defaultProps = {
  href: 'https://www.google.com',
  text: 'Google',
  handleClick: this.handleClick
};

export default CustomLink;
