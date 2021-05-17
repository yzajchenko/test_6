import React from "react";
import { Switch, Route } from "react-router-dom";

import ROUTES from "./RoutesName";
import EmployeesContainer from "../pages/EmployeesPage/container/EmployeesContainer";
import HomeContainer from "../pages/HomePage/container/HomeContainer";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME_IN_PAGE} component={HomeContainer} />
      <Route
        exact
        path={ROUTES.EMPLOYEES_IN_PAGE}
        component={EmployeesContainer}
      />
    </Switch>
  );
};

export default Routes;
