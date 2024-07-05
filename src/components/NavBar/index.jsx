import "./NavBar.css";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contacts</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
