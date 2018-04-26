import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class cclemon extends Component {
  render() {
    return (
      <div>
        <img
          src="https://japancentre-images.freetls.fastly.net/images/pics/11080/large/10644-Suntory-cc-lemon-can.jpg?1469569732"
          alt=""
        />

        <h3>
          <Link to="/">Go back</Link>
        </h3>
      </div>
    );
  }
}
