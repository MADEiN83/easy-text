import RouteArgs from "./router.interface";
import { Home } from "pages";

export const ROUTE_KEYS = {
  HOME: "home",
};

export type RouteKeys = keyof typeof ROUTE_KEYS;

// eslint-disable-next-line no-unused-vars
export const ROUTE_PATHS: { [Key in RouteKeys]: string } = {
  HOME: "/",
};

const routes: RouteArgs[] = [
  {
    key: "HOME",
    path: ROUTE_PATHS["HOME"],
    component: Home,
    exact: true,
  },
];

export default routes;
