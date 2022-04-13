import React from "react";
import { Route, Switch, Redirect} from "react-router-dom";

import classes from "./Dashboard.module.css";
import MainBar from "./MainBar/MainBar";
import Analytics from "../Analytics/Analytics";

const Dashboard = () => {
  return (
      <Switch>
        <Route path="/inbox" exact>
          <MainBar />
        </Route>
        <Route path="/inbox/dashboard" exact>

        </Route>
        <Route path="/inbox/analytics" exact>
          <Analytics />
        </Route>
      </Switch>
  );
};

export default Dashboard;
