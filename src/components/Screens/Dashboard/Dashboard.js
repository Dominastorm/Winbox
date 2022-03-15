import Sidebar from "../../Elements/SideBar/SideBar";
import classes from "./Dashboard.module.css";
import MainBar from "./MainBar/MainBar";
import Modal from "../../UI/Modal/Modal";
import Step1 from "./PopUp/Step1/Step1";
import Step2 from "./PopUp/Step2/Step2";
import Step3 from "./PopUp/Step3/Step3";
import Logout from "./PopUp/Logout/Logout";
import DeleteCampaign from "./PopUp/DeleteCampaign/DeleteCampaign"

const Dashboard = () => {
  return (
    <>
    <Step1/>
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
