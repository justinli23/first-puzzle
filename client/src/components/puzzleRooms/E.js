import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function E() {
  const [location, setLocation] = useOutletContext();
  setLocation("E");
  const [cupA, setCupA] = useState([0, 2]);
  const [cupB, setCupB] = useState([0, 6]);
  const [cupC, setCupC] = useState([0, 11]);
  // const [selected, setSelected] = useState("cup", "SetterFunction")

  function handleFill(cup, setter) {
    setter([cup[1], cup[1]]);
  }

  function handleDump(cup, setter) {
    setter([0, cup[1]]);
  }

  function handlePour(giver, setGiver, receiver, setReceiver) {
    const freeSpace = receiver[1] - receiver[0];
    const transferAmount = giver[0] - freeSpace;

    setGiver([giver[0] - transferAmount, giver[1]]);
    setReceiver([receiver[0] + transferAmount, receiver[1]]);
  }

  return (
    <div>
      <h1>Puzzle E</h1>
      <div className="cup">
        <div>CUP HERE</div>

        <button
          onClick={() => {
            handlePour(cupB, setCupB, cupA, setCupA);
          }}
        >
          TEST POUR B TO A
        </button>
        <p>
          {cupA[0]} / {cupA[1]} CUP A
        </p>
        <button
          onClick={() => {
            handleFill(cupA, setCupA);
          }}
        >
          FILL
        </button>
        <button
          onClick={() => {
            handleDump(cupA, setCupA);
          }}
        >
          DUMP
        </button>
      </div>

      <div className="cup">
        <p>
          {cupB[0]} / {cupB[1]} CUP B
        </p>
        <button
          onClick={() => {
            handleFill(cupB, setCupB);
          }}
        >
          FILL
        </button>
        <button
          onClick={() => {
            handleDump(cupB, setCupB);
          }}
        >
          DUMP
        </button>
      </div>

      <div className="cup">
        <p>
          {cupC[0]} / {cupC[1]} CUP C
        </p>
        <button
          onClick={() => {
            handleFill(cupC, setCupC);
          }}
        >
          FILL
        </button>
        <button
          onClick={() => {
            handleDump(cupC, setCupC);
          }}
        >
          DUMP
        </button>
      </div>
      <div>
        <p>Measure out 7 Cups of Fondue in any of the Cups</p>
      </div>
      <Link to={"/puzzle/d"}>FORWARD TO "D"</Link>
      <br></br>
      <Link to={"/puzzle/lobby"}>LEFT TO LOBBY"</Link>
      <br></br>
    </div>
  );
}

export default E;
