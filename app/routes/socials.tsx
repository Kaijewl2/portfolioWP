import { Nav } from "~/components/nav/nav";
import type { Route } from "./+types/socials";
import { SocialButtons } from "~/components/socialButtons/socialButtons";

export default function Socials({}: Route.ComponentProps) {
  return (
    <div>
      <Nav />
      <SocialButtons />
    </div>
  );
}
