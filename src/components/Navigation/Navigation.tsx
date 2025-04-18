import { NavLink } from "react-router";
import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <NavLink className="navigation__link" to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navigation__link" to="/add-pokemon">
            Add Pokémon
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
