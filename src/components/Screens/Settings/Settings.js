import Sidebar from "../SideBar/SideBar";
import classes from "./Settings.module.css";
import Header from "./Header/Header"
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
        </div>
      </div>
    </>
  );
};

export default Settings;
