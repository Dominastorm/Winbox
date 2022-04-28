import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Sidebar from "../../Elements/SideBar/SideBar";
import classes from "./EmailBlacklistAndDNS.module.css";
import MainBar from "./MainBar/MainBar";
import Report from "./Report/Report";
import Error from "../Error/Error";

const EmailBlacklistAndDNS = () => {
  return (
    <Switch>
      <Route path="/email-blacklist-and-DNS-checker" exact>
        <MainBar />
      </Route>
      <Route path="/email-blacklist-and-DNS-checker/report" exact>
        <Report />
      </Route>
      <Route path="/">
        <Redirect to="/error" />
      </Route>
    </Switch>
  );
};

export default EmailBlacklistAndDNS;
