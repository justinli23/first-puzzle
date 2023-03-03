import "./inventory.css";

function Inventory(props) {
  console.log(props.items);

  return (
    <div id="inventory">
      <div className="slot">{props.items[0]}</div>
      <div className="slot">{props.items[1]}</div>
      <div className="slot">Slot 3</div>
      <div className="slot">Slot 4</div>
      <div className="slot">Slot 5</div>
      <div className="slot">Slot 6</div>
    </div>
  );
}

export default Inventory;
