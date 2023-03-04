import "./inventory.css";

function Inventory(props) {
  return (
    <div id="inventory">
      <div className="slot">{props.items[0]}</div>
      <div className="slot">{props.items[1]}</div>
      <div className="slot">{props.items[2]}</div>
      <div className="slot">{props.items[3]}</div>
      <div className="slot">{props.items[4]}</div>
      <div className="slot">{props.items[5]}</div>
    </div>
  );
}

export default Inventory;
