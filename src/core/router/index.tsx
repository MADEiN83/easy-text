import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import routes from "./router.config";
import RouteArgs from "./router.interface";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="">
        <Switch>
          {routes.map((route: RouteArgs) => (
            // eslint-disable-next-line
            <Route {...route} />
          ))}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
