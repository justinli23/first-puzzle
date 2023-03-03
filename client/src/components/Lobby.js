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
        <p>
          Glittering gemstones and streaks of sugary frosting decorate the tall
          cobblestone walls of the castle. An extravagantly adorned chandelier
          with yellow crystals bathes the spacious hall in a golden light. A
          magnificent fountain bubbles profusely with not water, but rich
          chocolate fondue. Seven flowerpots, each with eleven flowers, bloom
          with the colors of the rainbow and encircle the grand fountain.
        </p>
        <p></p>
      </div>
    </div>
  );
}

export default Lobby;
