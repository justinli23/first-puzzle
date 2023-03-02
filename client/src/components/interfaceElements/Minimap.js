import "./minimap.css";

function Minimap(props) {
  return (
    <div className="map">
      <div className="row">
        {props.location == "B" ? (
          <h2 className="room" id="here">
            B
          </h2>
        ) : (
          <h2 className="room">B</h2>
        )}
        {props.location == "C" ? (
          <h2 className="room" id="here">
            C
          </h2>
        ) : (
          <h2 className="room">C</h2>
        )}
        {props.location == "D" ? (
          <h2 className="room" id="here">
            D
          </h2>
        ) : (
          <h2 className="room">D</h2>
        )}
      </div>
      <div className="row">
        {props.location == "A" ? (
          <h2 className="room" id="here">
            A
          </h2>
        ) : (
          <h2 className="room">A</h2>
        )}
        {props.location == "L" ? (
          <h2 className="room" id="here">
            L
          </h2>
        ) : (
          <h2 className="room">L</h2>
        )}
        {props.location == "E" ? (
          <h2 className="room" id="here">
            E
          </h2>
        ) : (
          <h2 className="room">E</h2>
        )}
      </div>
      {/* Location is {props.location} */}
    </div>
  );
}

export default Minimap;
