import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("socials", "./routes/socials.tsx"),
  route("projects", "./routes/projects.tsx"),
] satisfies RouteConfig;
