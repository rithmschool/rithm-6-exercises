import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ColorList extends Component {
  render() {
    let items = this.props.colorList.map((item, i) => {
      return (
        <div>
          <Link to={`colors/${item.color}`}> Color: {item.color}</Link>
        </div>
      );
    });
    return (
      <div>
        {items}
        <Link to={'colors/new'}>Add New Color</Link>
      </div>
    );
  }
}

export default ColorList;
