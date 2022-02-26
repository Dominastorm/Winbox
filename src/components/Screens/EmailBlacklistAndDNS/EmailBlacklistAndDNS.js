import Sidebar from "../../Elements/SideBar/SideBar";
import classes from "./EmailBlacklistAndDNS.module.css";
import MainBar from "./MainBar/MainBar";
import Modal from "../../UI/Modal/Modal";
import Runtest from "./Popups/Runtest"
import EmailSpamChecker from "./Popups/EmailSpamChecker"

const EmailBlacklistAndDNS = () => {
  return (
    <>
    <EmailSpamChecker/>
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

export default EmailBlacklistAndDNS;
