import React, { Component } from 'react';

class Tweet extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>
          {this.props.user} {this.props.message} {this.props.date}{' '}
        </p>
      </div>
    );
  }
}

//Ellie said dw about styling.

export default Tweet;
