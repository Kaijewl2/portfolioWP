import { Body } from "~/components/body/body";
import type { Route } from "./+types/home";
import { Header } from "~/components/header/header";
import { Nav } from "~/components/nav/nav";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "kaijewl2" },
    { name: "description", content: "best dev page oat" },
  ];
}

export default function Home() {
  useEffect(() => {
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  return (
    <>
      <div className="App">
        <Nav />
      </div>
      <Header />
      <Body />
    </>
  );
}
