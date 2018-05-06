import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class Kudos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>:(</p>
        <img
          src="https://s3.amazonaws.com/secretsaucefiles/photos/images/000/051/425/large/13749969624_fb662a92f7_b.jpg?1477942873"
          alt=""
        />
        <img
          src="https://images.kindsnacks.com/catalog/product/cache/1/mobile/9df78eab33525d08d6e5fb8d27136e95/1/7/17128-mobile-kind-nut-bars-almond-coconut_opt.png"
          alt=""
        />
        <div>
          <Link to="/">Still Hungry</Link>
        </div>
      </div>
    );
  }
}

export default Kudos;
