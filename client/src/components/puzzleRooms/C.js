import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function C() {
  const [location, setLocation] = useOutletContext();
  setLocation("C");

  const [operators, setOperators] = useState(Array(6).fill("?"));
  const [solved, setSolved] = useState(false);

  function handleOp(operatorIndex, e) {
    const newOps = [...operators];
    newOps[operatorIndex] = e.target.value;
    setOperators(newOps);
    checkSolved();
  }

  function checkSolved() {
    setSolved(true);
  }
  // Need to update state accurately!
  const operands = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ];

  function toggleSolved() {
    setSolved(!solved);
  }

  const trueOperators = ["-", "+", "*", "-", "*", "/"];

  const results = [4, 2, 2];

  return (
    <div>
      <h1>Puzzle C</h1>
      {/* PROBLEM 1 */}
      <button onClick={toggleSolved}>toggleSolved</button>
      <div>{operators}</div>
      <div>{trueOperators}</div>
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
          <select
            id="op0"
            name="op0"
            className="operatorForm"
            onChange={(e) => {
              handleOp(0, e);
            }}
          >
            <option value="?"> </option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </form>
        <form>
          <select
            id="op1"
            name="op1"
            className="operatorForm"
            onChange={(e) => {
              handleOp(1, e);
            }}
          >
            <option value="?"> </option>
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
      {/* //PROBLEM 2 */}
      <div>
        <form>
          <select
            id="op2"
            name="op2"
            className="operatorForm"
            onChange={(e) => {
              handleOp(2, e);
            }}
          >
            <option value="?"> </option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </form>
        <form>
          <select
            id="op3"
            name="op3"
            className="operatorForm"
            onChange={(e) => {
              handleOp(3, e);
            }}
          >
            <option value="?"> </option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </form>
      </div>
      {/* //PROBLEM 3 */}
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
        <form>
          <select
            id="op4"
            name="op4"
            className="operatorForm"
            onChange={(e) => {
              handleOp(4, e);
            }}
          >
            <option value="?"> </option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </form>
        <form>
          <select
            id="op5"
            name="op5"
            className="operatorForm"
            onChange={(e) => {
              handleOp(5, e);
            }}
          >
            <option value="?"> </option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </form>
      </div>
      {solved ? <div>SOLVED</div> : <div>NOT SOLVED</div>}
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
