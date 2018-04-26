import React from 'react';
import { Link } from 'react-router-dom';

const Candy = () => (
  <div>
    <img
      src="http://www.candyoutfitters.com/assets/images/airheadsxtremes2packs.jpg"
      alt=""
    />
    <Link to="/">Take me home</Link>
  </div>
);

export default Candy;
