import React, { useState } from "react";
import classes from "./Data.module.css";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";

import Card from "../../../UI/Card/Card";
import User from "./Tabs/User/User";
import Account from "./Tabs/Account/Account";
import Subscription from "./Tabs/Subscription/Subscription";
import Invoices from "./Tabs/Invoices/Invoices";
import Error from "../../Error/Error";


const Navigation = () => {
  return (
    <Card className={classes.background}>
      <NavLink
        className={classes.navlink}
        activeClassName={classes.selected}
        to="/settings/user"
      >
        User
      </NavLink>
      <NavLink
        className={classes.navlink}
        activeClassName={classes.selected}
        to="/settings/account"
      >
        Account
      </NavLink>
      <NavLink
        className={classes.navlink}
        activeClassName={classes.selected}
        to="/settings/subscription"
      >
        Subscription
      </NavLink>
      <NavLink
        className={classes.navlink}
        activeClassName={classes.selected}
        to="/settings/invoices"
      >
        Invoices
      </NavLink>
    </Card>
  );
};

const Data = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/settings" exact>
          <Redirect to="/settings/user" />
        </Route>
        <Route path="/settings/user" exact>
          <User />
        </Route>
        <Route path="/settings/account" exact>
          <Account />
        </Route>
        <Route path="/settings/Subscription" exact>
          <Subscription />
        </Route>
        <Route path="/settings/invoices" exact>
          <Invoices />
        </Route>
        <Route path="/">
          <Redirect to="/error" />
        </Route>
      </Switch>
    </>
  );
};

export default Data;
