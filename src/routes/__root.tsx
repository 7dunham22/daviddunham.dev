import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import Bluesky from "../assets/icons/bluesky.svg";
import Linkedin from "../assets/icons/linkedin.svg";
import Github from "../assets/icons/github.svg";

export const Route = createRootRoute({
  component: () => (
    <>
      <h1>David Dunham</h1>
      <p>
        <Link href="/">Home</Link> | <Link href="/about">About</Link>
      </p>
      <p>
        Find me on &nbsp;
        <Link
          to="https://bsky.app/profile/daviddunham.dev"
          target="_blank"
          rel="noopener noreferrer">
          <img src={Bluesky} width={16} />
        </Link>
        , &nbsp;
        <Link
          to="https://www.linkedin.com/in/david-w-dunham/"
          target="_blank"
          rel="noopener noreferrer">
          <img src={Linkedin} width={16} />
        </Link>
        , and&nbsp;
        <Link
          to="https://github.com/7dunham22"
          target="_blank"
          rel="noopener noreferrer">
          <img src={Github} width={16} />
        </Link>
        .
      </p>
      <Outlet />
    </>
  ),
});
