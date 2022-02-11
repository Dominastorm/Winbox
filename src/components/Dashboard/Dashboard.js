import Sidebar from "./SideBar/SideBar";
import classes from "./Dashboard.module.css";
import MainBar from "./MainBar/MainBar"


const Dashboard = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.sidebar}>
          <Sidebar />
        </div>
        <div className={classes.main}>
          <MainBar/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
