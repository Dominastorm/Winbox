import React from "react";
import classes from "./App.module.css";
import { Route, Switch, Redirect } from "react-router-dom";

import Settings from "./components/Screens/Settings/Settings";
import Dashboard from "./components/Screens/Dashboard/Dashboard";
import Analytics from "./components/Screens/Analytics/Analytics";
import Login from "./components/Screens/Login/Login";
import EmailBlacklistAndDNS from "./components/Screens/EmailBlacklistAndDNS/EmailBlacklistAndDNS";
import Error from "./components/Screens/Error/Error";
import Sidebar from "./components/Elements/SideBar/SideBar";
import Header from "./components/Elements/Header/Header";

function App() {
  const [selectedPage, setSelectedPage] = React.useState(1);

  const renderPage = (event) => {
    setSelectedPage(event.currentTarget.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <Sidebar renderPage={renderPage} selectedPage={selectedPage} />
      </div>
      <div className={classes.main}>
        <Header/>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/inbox" />
          </Route>
          <Route path="/inbox">
            <Dashboard />
          </Route>
          <Route path="/email-blacklist-and-DNS-checker" exact>
            <EmailBlacklistAndDNS />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/">
            <Error/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
