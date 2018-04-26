import React, { Component } from "react";
import "./giphy-img.css";

const GiphyImg = ({ src, search }) => (
  <div>
    <img src={src} alt={search} />
    <br />
    <p className="Search-term">{search}</p>
    <br />
  </div>
);

export default GiphyImg;
