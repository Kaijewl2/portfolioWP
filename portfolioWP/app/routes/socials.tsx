import { Nav } from "~/components/nav/nav";
import type { Route } from "./+types/socials";

export default function Socials({}: Route.ComponentProps) {
  return (
    <div>
      <Nav />
      <h1>Socials</h1>
    </div>
  );
}
