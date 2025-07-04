import { Link, NavLink } from "react-router";
import { RiHome2Fill } from "react-icons/ri";
import "./nav.css";

export function Nav() {
  return (
    <nav>
      <Link to="/" className="title pl-5">
        <RiHome2Fill />
      </Link>
      <ul className=" pr-15">
        <li className="pr-20">
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
