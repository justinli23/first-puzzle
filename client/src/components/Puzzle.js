import React from "react";
import Interface from "./Interface";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "./puzzle.css";

function Puzzle(props) {
  const [location, setLocation] = useState("L");
  const [items, setItems] = [useState(new Array(6))];

  return (
    <div className="puzzle">
      <Interface location={location} setLocation={setLocation} items={items} />
      <Outlet context={[location, setLocation]} />
    </div>
  );
}

export default Puzzle;
