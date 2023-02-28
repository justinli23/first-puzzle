import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function D() {
  const [location, setLocation] = useOutletContext();
  setLocation("D");

  return (
    <div>
      <h1>Puzzle D</h1>
      <div>
        MOVE<br></br>
        <Link to={"/puzzle/c"}>LEFT TO PUZZLE ROOM C</Link>
        <br></br>
        <Link to={"/puzzle/e"}>DOWN TO PUZZLE ROOM E</Link>
        <br></br>
      </div>
    </div>
  );
}

export default D;
