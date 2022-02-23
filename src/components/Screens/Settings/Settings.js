import Sidebar from "../SideBar/SideBar";
import classes from "./Settings.module.css";
import Header from "./Header/Header";
import Data from "./Data/Data";
// import User from "./User/User";

const Settings = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.sidebar}>
          <Sidebar />
        </div>
        <div className={classes.main}>
          <Header/>
          <Data/>
        </div>
      </div>
    </>
  );
};

export default Settings;
