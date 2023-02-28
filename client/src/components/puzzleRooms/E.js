import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function E() {
  const [location, setLocation] = useOutletContext();
  setLocation("E");
  return (
    <div>
      <h1>Puzzle E</h1>
      <Link to={"/puzzle/d"}>FORWARD TO "D"</Link>
      <br></br>
      <Link to={"/puzzle/lobby"}>LEFT TO LOBBY"</Link>
      <br></br>
    </div>
  );
}

export default E;
