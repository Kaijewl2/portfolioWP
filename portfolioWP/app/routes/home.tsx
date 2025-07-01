import type { Route } from "./+types/home";
import { Header } from "~/components/header/header";
import { Nav } from "~/components/nav/nav";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "kaijewl2" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
    </>
  );
}
