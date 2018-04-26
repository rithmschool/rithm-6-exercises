import React from 'react';

const Gif = ({ url }) => (
    <div className="mx-2 my-auto img-div">
        <img className="gif-img m-2" src={url} alt="some gif"/>
    </div>
)

export default Gif;