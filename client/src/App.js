import React from "react";
import { useState, useEffect } from "react";
import Info from "./components/Info";
import { Outlet, Link } from "react-router-dom";
import "./App.css";
import Interface from "./components/Interface";

function App() {
  const [location, setLocation] = useState("L");
  const [items, setItems] = useState([]);
  const [showInfo, setShowInfo] = useState(true);

  return (
    <div className="App">
      <div className="puzzle">
        <Interface
          location={location}
          setLocation={setLocation}
          items={items}
        />
        <Outlet context={[setLocation, items, setItems]} />
      </div>
    </div>
  );
}

export default App;
