import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import "./B.css";

function B() {
  const [location, setLocation] = useOutletContext();
  setLocation("B");

  // const [box, setBox] = useState(true);

  function openBox(boxNum) {
    if (boxNum == 77) {
      alert("Yay!");
    } else {
      alert("There's nothing here...");
    }
  }

  const boxes = [];
  for (let rows = 0; rows < 10; rows++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    const row = [];
    for (let cols = 0; cols < 10; cols++) {
      const boxNum = rows * 10 + cols + 1;
      row.push(
        <button className="box" key={boxNum} onClick={() => openBox(boxNum)}>
          {boxNum}
        </button>
      );
    }
    boxes.push(
      <div className="row" key={rows}>
        {row}
      </div>
    );
  }
  const correctBox = 77;

  return (
    <div>
      <h1>Puzzle B</h1>
      <div className="boxes">{boxes}</div>

      <div>
        MOVE<br></br>
        <Link to={"/puzzle/a"}>DOWN TO PUZZLE ROOM A</Link>
        <br></br>
        <Link to={"/puzzle/c"}>RIGHT TO PUZZLE ROOM C</Link>
      </div>
    </div>
  );
}

export default B;
