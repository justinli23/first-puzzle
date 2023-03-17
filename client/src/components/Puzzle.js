import React from "react";
import Interface from "./Interface";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function Puzzle() {
  const [location, setLocation] = useState("L");
  const [items, setItems] = useState([]);

  return (
    <div className="puzzle">
      <Interface location={location} setLocation={setLocation} items={items} />
      <Outlet context={[setLocation, items, setItems]} />
    </div>
  );
}

export default Puzzle;
