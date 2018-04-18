import React, { Component } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

class Squid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squids: [],
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    this.setState(prevState => ({
      squids: [...prevState.squids, { x, y }]
    }));
  }

  render() {
    let squid = this.state.squids.map((value, idx) => {
      return (
        <img
          src="https://previews.123rf.com/images/charcomphoto/charcomphoto1403/charcomphoto140300034/27149451-bbq-squid-on-a-stick.jpg"
          alt=""
          style={{ top: `${value.y}px`, left: `${value.x}px` }}
          width="100px"
          top="100px"
        />
      );
    });
    return (
      <div>
        <h1>squids eaten: {this.state.squids.length}</h1>

        <button onClick={this.handleClick}>Add Another Squid</button>
        <Link to="/">Take me home</Link>
        {squid}
      </div>
    );
  }
}

export default Squid;
