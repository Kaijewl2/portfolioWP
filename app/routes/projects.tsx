import { Nav } from "~/components/nav/nav";
import type { Route } from "./+types/projects";

export default function Projects({}: Route.ComponentProps) {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl text-center">Give me a sec 💀🙏</h1>
      </div>
    </>
  );
}
