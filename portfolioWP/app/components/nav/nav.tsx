import { Link } from "react-router";

export function Nav() {
  return (
    <main>
      <nav className="App">
        <ul>
          <li>
            <Link to={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link to={"/socials"}>Socials</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
