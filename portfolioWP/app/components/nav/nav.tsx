import { Link, NavLink } from "react-router";
import { RiHome2Fill } from "react-icons/ri";
import "./nav.css";

export function Nav() {
  return (
    <main>
      <nav className="App">
        <Link to="/" className="title">
          <RiHome2Fill />
        </Link>
        <ul>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/socials">Socials</NavLink>
          </li>
        </ul>
      </nav>
    </main>
  );
}
