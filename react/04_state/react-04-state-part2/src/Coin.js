import React from "react";
import "./Coin.css";

const Coin = ({ info }) => {
  return (
    <div className="Coin">
      <img src={info.imgSrc} alt={info.side} />
    </div>
  );
};

export default Coin;
