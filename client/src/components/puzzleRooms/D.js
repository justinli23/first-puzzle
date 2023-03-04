import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function D() {
  const [setLocation, items, setItems] = useOutletContext();
  setLocation("D");

  const answers = ["White", "Milk", "Dark"];
  const pics = ["../../../white.png", "../../../milk.png", "../../../dark.png"];

  const [res, setRes] = useState(new Array(answers.length));

  function handleRes(index, e) {
    const resCopy = [...res];
    resCopy[index] = e.target.value;
    setRes(resCopy);
  }

  return (
    <div>
      <h1>Puzzle D</h1>
      <div>
        <div>
          <img src={pics[0]} />
          <p>{res[0]}</p>
          <form>
            <input type="text" onChange={(e) => handleRes(0, e)} />
          </form>
        </div>
        <div>
          <img src={pics[1]} />
          <p>{res[1]}</p>
          <form>
            <input type="text" onChange={(e) => handleRes(1, e)} />
          </form>
        </div>
        <div>
          <img src={pics[2]} />
          <p>{res[2]}</p>
          <form>
            <input type="text" onChange={(e) => handleRes(2, e)} />
          </form>
        </div>
      </div>
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

// function randomIntFromInterval(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
