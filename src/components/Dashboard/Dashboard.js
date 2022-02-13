import Sidebar from "./SideBar/SideBar";
import classes from "./Dashboard.module.css";
import MainBar from "./MainBar/MainBar";
import Modal from "../UI/Modal/Modal";
import Step1 from "./PopUp/Step1/Step1"
import Step2 from "./PopUp/Step2/Step2"

const Dashboard = () => {
  return (
    <>
    <Step2/>
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.main}>
        <MainBar />
      </div>
    </div>
    </>
  );
};

export default Dashboard;
