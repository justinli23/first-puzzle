import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import AHints from "./AHints";

function A() {
  const [location, setLocation] = useOutletContext();
  setLocation("A");

  //Quote - String of Quote that is the target
  const quote =
    "LIFE IS LIKE A BOX OF CHOCOLATES, YOU NEVER KNOW WHAT YOU'RE GOING TO GET";

  //CYPHER - Map with Key: Letter, Val: Coded Number
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const cypher = new Map();
  let value = 1;
  for (let i = 0; i < quote.length; i++) {
    if (!cypher.get(quote[i]) && letters.includes(quote[i])) {
      cypher.set(quote[i], value);
      value++;
    }
  }
  console.log(cypher);
  //ENCODED - Array with Coded Numbers replacing each letter of quote
  const encoded = [];
  for (const char of quote) {
    if (letters.includes(char)) {
      encoded.push(cypher.get(char));
    } else {
      encoded.push(char);
    }
  }

  //SOLVED - Array of booleans that represents whether the char at that index has been solved
  const [solved, setSolved] = useState(Array(quote.length).fill(false));

  //PROGRESS - String using "SOLVED" array and "quote" syntax to display progress
  let progress = "";
  for (let i = 0; i < quote.length; i++) {
    if (letters.includes(quote[i]) && solved[i] == false) {
      progress += "?";
    } else {
      progress += quote[i];
    }
  }

  //uniqueLetters - Set of unique letters found in Quote
  const uniqueLetters = new Set();
  for (const char of quote) {
    if (letters.includes(char)) {
      uniqueLetters.add(char);
    }
  }

  return (
    <div>
      <h1>Puzzle A</h1>
      <div>
        <p>{quote}</p>
        <p>{progress}</p>
        <p>{encoded}</p>
        <AHints uniqueLetters={uniqueLetters} />
      </div>
      <div>
        MOVE<br></br>
        <br></br>
        <Link to={"/puzzle/lobby"}>RIGHT TO LOBBY</Link>
      </div>
    </div>
  );
}

export default A;
