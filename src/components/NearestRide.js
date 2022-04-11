import "../App.css";
import React, { useState, useEffect } from "react";

function NearestRide() {
  const [nearestRides, setNearestRides] = useState([]);
  useEffect(() => {
    fetchRideData();
  }, []);

  useEffect(() => {
    console.log(nearestRides);
  }, [nearestRides]);

  async function fetchRideData() {
    let res = await fetch("https://assessment.api.vweb.app/rides");
    let rides = await res.json();

    res = await fetch("https://assessment.api.vweb.app/user");
    const { station_code } = await res.json();
    console.log(station_code);

    rides.map((r, i) => {
      let counts = r.station_path;

      let closest = counts.reduce(function (prev, curr) {
        return Math.abs(curr - station_code) < Math.abs(prev - station_code)
          ? curr
          : prev;
      });

      rides[i].difference = Math.abs(station_code - closest);

      rides = rides.sort(function (a, b) {
        return a.difference - b.difference;
      });
    });

    setNearestRides(rides);
  }

  return (
    nearestRides &&
    nearestRides.map((item, i) => {
      return (
        <div className="card" key={i}>
          <div className="card-img">
            <img src="https://picsum.photos/200" alt="card-img" />
          </div>
          <div className="card-detail">
            <p>Ride Id: {item.id}</p>
            <p>Origin Station: {item.origin_station_code}</p>
            <p>station_path: </p>
            <p>Date:</p>
            <p>Distance:</p>
          </div>
          <div className="card-place">
            <p>city name</p>
            <p>state name</p>
          </div>
        </div>
      );
    })
  );
}

export default NearestRide;
