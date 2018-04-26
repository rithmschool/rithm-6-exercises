import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class BossCoffee extends Component {
  render() {
    return (
      <div>
        <img
          src="https://pixelatedprovisions.com/wp-content/uploads/2016/04/boss_01-1.png"
          alt=""
        />
        <Link to="/"> Go back</Link>
      </div>
    );
  }
}
