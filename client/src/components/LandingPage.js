import "./Info";
import Info from "./Info";
import { Outlet, Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <Info />
      <header className="App-header">
        <Link to={"/puzzle/lobby"}>START</Link>
      </header>
    </div>
  );
}

export default LandingPage;
