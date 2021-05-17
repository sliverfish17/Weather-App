import React from "react";
import hot from "../assets/img/hot.svg";
import cold from "../assets/img/cold.svg";
function MinMaxTemp() {
  return (
    <div className="highlights_block">
      <span className="title">Max/mix temprature</span>
      <div className="max">
        <img src={hot} alt="hot" className="hot_index" />
        <span className="max_temperature">15°</span>
        <span className="celsius">c</span>
      </div>
      <div className="min">
        <img src={cold} alt="cold" className="cold_index" />
        <span className="min_temperature">3°</span>
        <span className="celsius">c</span>
      </div>
    </div>
  );
}

export default MinMaxTemp;