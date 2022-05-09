import React from "react";
import classes from "./App.module.css";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

import Settings from "./components/Screens/Settings/Settings";
import Dashboard from "./components/Screens/Dashboard/Dashboard";
import Analytics from "./components/Screens/Analytics/Analytics";
import Login from "./components/Screens/Login/LoginPage/LoginPage";
import SignUp from "./components/Screens/Login/SignUpPage/SignUpPage";
// import EmailEditor from "./components/Screens/EmailEditor/EmailEditor";
import EmailBlacklistAndDNS from "./components/Screens/EmailBlacklistAndDNS/EmailBlacklistAndDNS";
import Error from "./components/Screens/Error/Error";
import Sidebar from "./components/Elements/SideBar/SideBar";
import Header from "./components/Elements/Header/Header";

function App() {
  const [SideBarOpen, setSideBarOpen] = React.useState(0);
  const [Auth, setAuth] = React.useState(0);
  const history = useHistory();

  const sideBarClasses = [
    classes.sidebar,
    SideBarOpen ? classes.sidebarOpen : classes.sidebarClose,
  ];

  const toggleSideBar = (event) => {
    setSideBarOpen(!SideBarOpen);
  };

  const Authenticate = () => {
    setAuth(1);
    history.replace("/inbox");
  }

  return (
    <>
      {Auth == 0 && (
        <Switch>
          <Route path="/login">
            <Login onClick={Authenticate}/>
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      )}
      {Auth == 1 && (
        <div className={classes.container}>
          <div className={sideBarClasses.join(" ")}>
            <Sidebar isOpen={SideBarOpen} togglePopUp={toggleSideBar} />
          </div>
          <div className={classes.main}>
            <Header />
            <Switch>
              <Route path="/" exact>
                <Redirect to="/inbox" />
              </Route>
              <Route path="/inbox">
                <Dashboard />
              </Route>
              <Route path="/email-blacklist-and-DNS-checker">
                <EmailBlacklistAndDNS />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
              {/*
          <Route path="/error">
            <Error/>
        </Route>*/}
              <Route path="/">
                <Redirect to="/error" />
              </Route>
            </Switch>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
