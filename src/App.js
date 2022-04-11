import "./App.css";
import NearestRide from "./components/NearestRide";
import React, { useState } from "react";
import UpcomingRides from "./components/UpcomingRides";
import PastRides from "./components/PastRides";

function App() {
  const [tab, setTab] = useState("nearest");

  let component = <NearestRide />;

  if (tab === "nearest") {
    component = <NearestRide />;
  } else if (tab === "upcoming") {
    component = <UpcomingRides />;
  } else {
    component = <PastRides />;
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Edvora</h1>
        <div className="profile">
          <h2>name</h2>
          <div className="header-img">
            <img src="https://picsum.photos/200" alt="img" />
          </div>
        </div>
      </header>

      <main className="main-container">
        <div className="tabs">
          <div className="tabs-left">
            <p onClick={() => setTab("nearest")}>Nearest Rides</p>
            <p onClick={() => setTab("upcoming")}>Upcoming Rides</p>
            <p onClick={() => setTab("past")}>Past Rides</p>
          </div>
          <div className="tabs-right">
            <p>Filters</p>
          </div>
        </div>
        {component}
      </main>
    </div>
  );
}

export default App;
