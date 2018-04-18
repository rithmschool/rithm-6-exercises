import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './coca-cola.css';
export default class BossCoffee extends Component {
  render() {
    return (
      <div>
        <img
          className="coca-cola"
          src="https://img.alicdn.com/imgextra/i2/TB1.BU7QVXXXXbjXpXXXXXXXXXX_!!0-item_pic.jpg"
          alt=""
        />
        <Link to="/"> Go back</Link>
      </div>
    );
  }
}
