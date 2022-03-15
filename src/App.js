import React from "react";
import classes from "./App.module.css";
import Settings from "./components/Screens/Settings/Settings";
import Dashboard from "./components/Screens/Dashboard/Dashboard";
import Analytics from "./components/Screens/Analytics/Analytics";
import Login from "./components/Screens/Login/Login";
import EmailBlacklistAndDNS from "./components/Screens/EmailBlacklistAndDNS/EmailBlacklistAndDNS";
import Error from "./components/Screens/Error/Error";

function App() {
  return (
    <div className={classes.container}>
      <Settings />
    </div>
  );
}

export default App;
