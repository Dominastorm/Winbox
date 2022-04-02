import React from "react";
import classes from "./App.module.css";
import Settings from "./components/Screens/Settings/Settings";
import Dashboard from "./components/Screens/Dashboard/Dashboard";
import Analytics from "./components/Screens/Analytics/Analytics";
import Login from "./components/Screens/Login/Login";
import EmailBlacklistAndDNS from "./components/Screens/EmailBlacklistAndDNS/EmailBlacklistAndDNS";
import Error from "./components/Screens/Error/Error";
import Sidebar from "./components/Elements/SideBar/SideBar";

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
          {selectedPage == 1 && <Dashboard />}
          {selectedPage == 2 && <EmailBlacklistAndDNS />}
          {selectedPage == 3 && <Analytics />}
          {selectedPage == 4 && <Settings />}
      </div>
    </div>
  );
}

export default App;
