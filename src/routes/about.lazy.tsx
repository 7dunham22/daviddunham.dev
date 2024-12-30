import { createLazyFileRoute } from "@tanstack/react-router";
import About from "../assets/about.mdx";

export const Route = createLazyFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return <About />;
}
