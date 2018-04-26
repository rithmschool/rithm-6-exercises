import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ColorPage.css";

const ColorPage = ({ color }) => (
  <div className="colorpage" style={{ backgroundColor: color }}>
    <p>{color}</p>
    <Link to="/colors">Go Home</Link>
  </div>
);

export default ColorPage;
