import React from "react";
import Interface from "./Interface";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "./puzzle.css";

function Puzzle(props) {
  const [location, setLocation] = useState("L");

  return (
    <div className="puzzle">
      <Interface location={location} />
      <Outlet context={[location, setLocation]} />
    </div>
  );
}

export default Puzzle;
