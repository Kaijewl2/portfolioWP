import { Body } from "~/components/body/body";
import type { Route } from "./+types/home";
import { Header } from "~/components/header/header";
import { Nav } from "~/components/nav/nav";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "kaijewl2" },
    { name: "description", content: "best dev page oat" },
  ];
}

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Body />
    </>
  );
}
