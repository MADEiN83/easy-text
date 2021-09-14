import { RouteProps } from "react-router-dom";

import { RouteKeys } from "./router.config";

interface RouteArgs extends RouteProps {
  key: RouteKeys;
  isPrivateRoute?: boolean;
}

export default RouteArgs;
