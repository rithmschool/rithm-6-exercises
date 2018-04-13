import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const { name, image, type } = this.props;
    const altTag = `Pic of ${name}`;
    return (
      <div>
        <p>{name}</p>
        <img src={image} alt={altTag} />
        <p>Type: {type}</p>
      </div>
    );
  }
}

export default Pokemon;
