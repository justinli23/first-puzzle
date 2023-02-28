import "../App.css";
import { Outlet, Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function Lobby() {
  const [location, setLocation] = useOutletContext();
  setLocation("L");

  return (
    <div>
      <h1>Lobby</h1>
      <div className="chocolate-fountain">
        CHOCOLATE FOUNTAIN HERE
        <p>Throw a coin and receive a hint for one of the puzzles!</p>
      </div>
      <div>
        MOVE<br></br>
        <Link to={"/puzzle/a"}>LEFT TO "A"</Link>
        <br></br>
        <Link to={"/puzzle/c"}>UP TO "C"</Link>
        <br></br>
        <Link to={"/puzzle/e"}>RIGHT TO "E"</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Lobby;
