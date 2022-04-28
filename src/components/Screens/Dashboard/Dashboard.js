import React from "react";
import { Route, Switch, Redirect} from "react-router-dom";

import MainBar from "./MainBar/MainBar";
import Analytics from "../Analytics/Analytics";
import Error from "..//Error/Error";

const Dashboard = () => {
  return (
      <Switch>
        <Route path="/inbox" exact>
          <MainBar />
        </Route>
        <Route path="/inbox/analytics" exact>
          <Analytics />
        </Route>
        <Route path="/">
          <Redirect to="/error" />
        </Route>
      </Switch>
  );
};

export default Dashboard;
