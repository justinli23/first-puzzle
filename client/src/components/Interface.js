import "./interface.css";
import { useState, useEffect } from "react";
import Inventory from "./interfaceElements/Inventory";
import Minimap from "./interfaceElements/Minimap";
import Stopwatch from "./interfaceElements/Stopwatch";
import Info from "./Info";

function Interface(props) {
  return (
    <div id="interface">
      {/* <Info /> */}
      <Minimap location={props.location} />
      <Inventory />
      <Stopwatch />
    </div>
  );
}

export default Interface;
