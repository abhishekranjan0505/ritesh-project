import "../App.css";
import React from "react";

function NearestRide() {
  return (
    <div className="card">
      <div className="card-img">
        <img src="https://picsum.photos/200" alt="card-img" />
      </div>
      <div className="card-detail">
        <p>Ride Id:</p>
        <p>Origin Station:</p>
        <p>station_path:</p>
        <p>Date:</p>
        <p>Distance:</p>
      </div>
      <div className="card-place">
        <p>city name</p>
        <p>state name</p>
      </div>
    </div>
  );
}

export default NearestRide;
