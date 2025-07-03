import { Link, NavLink } from "react-router";
import { RiHome2Fill } from "react-icons/ri";
import "./nav.css";

export function Nav() {
  return (
    <nav>
      <Link to="/" className="title">
        <RiHome2Fill />
      </Link>
      <ul>
        <li>
          <NavLink to="/projects" className="buttons">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/socials" className="buttons">
            Socials
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
