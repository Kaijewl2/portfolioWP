import { Nav } from "~/components/nav/nav";
import type { Route } from "./+types/projects";

export default function Projects({}: Route.ComponentProps) {
  return (
    <div>
      <Nav />
      <h1>Projects</h1>
    </div>
  );
}
