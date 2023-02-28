import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function C() {
  const [location, setLocation] = useOutletContext();
  setLocation("C");

  const [operators, setOperators] = useState(Array(6).fill("?"));

  function handleOp(operatorIndex, e) {
    const newOps = [...operators];
    newOps[operatorIndex] = e.target.value;
    setOperators(newOps);
  }

  const operands = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ];

  const results = [4, 2, 2];

  function updateOperators() {
    const opForm = document.getElementsByClassName("operatorForm");
  }

  //Need to have forms update state correctly!
  return (
    <div>
      <h1>Puzzle C</h1>
      <div className="equation">
        <p>
          {operands[0][0]}
          {operators[0]}
          {operands[0][1]}
          {operators[1]}
          {operands[0][2]}={results[0]}
        </p>
      </div>
      <div>
        <form>
          <input
            type="text"
            name="op1"
            onChange={(e) => {
              handleOp(0, e);
            }}
          />
        </form>
        <form>
          <select id="op2" name="op2" class="operatorForm">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </form>
      </div>
      <div className="equation">
        <p>
          {operands[1][0]}
          {operators[2]}
          {operands[1][1]}
          {operators[3]}
          {operands[1][2]}={results[1]}
        </p>
      </div>
      <div className="equation">
        <p>
          {operands[2][0]}
          {operators[4]}
          {operands[2][1]}
          {operators[5]}
          {operands[2][2]}={results[2]}
        </p>
      </div>
      <div>
        MOVE<br></br>
        <Link to={"/puzzle/b"}>LEFT TO PUZZLE ROOM B</Link>
        <br></br>
        <Link to={"/puzzle/d"}>RIGHT TO PUZZLE ROOM D</Link>
        <br></br>
        <Link to={"/puzzle/lobby"}>DOWN TO LOBBY</Link>
      </div>
    </div>
  );
}

export default C;
