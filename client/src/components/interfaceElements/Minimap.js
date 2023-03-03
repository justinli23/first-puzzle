import "./minimap.css";
import { Link } from "react-router-dom";

function Minimap(props) {
  props.setLocation(props.location);
  console.log(props.location);

  return (
    <div className="map">
      <div className="row">
        {props.location == "B" ? (
          <h2 className="room" id="here">
            B
          </h2>
        ) : (
          <h2 className="room">
            <Link to={"/puzzle/b"}>B</Link>
          </h2>
        )}
        {props.location == "C" ? (
          <h2 className="room" id="here">
            C
          </h2>
        ) : (
          <h2 className="room">
            <Link to={"/puzzle/c"}>C</Link>
          </h2>
        )}
        {props.location == "D" ? (
          <h2 className="room" id="here">
            D
          </h2>
        ) : (
          <h2 className="room">
            <Link to={"/puzzle/d"}>D</Link>
          </h2>
        )}
      </div>
      <div className="row">
        {props.location == "A" ? (
          <h2 className="room" id="here">
            A
          </h2>
        ) : (
          <h2 className="room">
            <Link to={"/puzzle/a"}>A</Link>
          </h2>
        )}
        {props.location == "L" ? (
          <h2 className="room" id="here">
            L
          </h2>
        ) : (
          <h2 className="room">
            <Link to={"/puzzle/lobby"}>L</Link>
          </h2>
        )}
        {props.location == "E" ? (
          <h2 className="room" id="here">
            E
          </h2>
        ) : (
          <h2 className="room">
            <Link to={"/puzzle/e"}>E</Link>
          </h2>
        )}
      </div>
      {/* Location is {props.location} */}
    </div>
  );
}

export default Minimap;
