import "./NavBar.css";
import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <div className="menu">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contacts</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
