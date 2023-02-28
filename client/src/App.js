import "./App.css";
import { useState, useEffect } from "react";
import Info from "./components/Info";
import { Outlet, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Info />
        <Link to={"/puzzle/lobby"}>START</Link>
        <Link to={"interface"}>INTERFACE TESTING</Link>
        <Outlet />
        <p>Page Count: {count}</p>
      </header>
    </div>
  );
}

export default App;
