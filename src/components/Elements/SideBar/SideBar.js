import classes from "./SideBar.module.css";
import Card from "../../UI/Card/Card";
import MessageIcon from "./icons/MessageIcon";
import QuestionIcon from "./icons/QuestionIcon";
import SettingsIcon from "./icons/SettingsIcon";
import SheildIcon from "./icons/SheildIcon";
import Button3 from "./Button3";

const SideBar = () => {
  return (
    <Card className={classes.background}>
      <span>
        <div className={classes.container}>
          <img src="images/expand.png" className={classes.expand} />
        </div>
        <div className={classes.container}>
          <Button3 parah="Inboxes">
            <MessageIcon />
          </Button3>
          <Button3 parah="Blacklists & DNS Checker">
            <SheildIcon />
          </Button3>
        </div>
      </span>
      <span>
        <div className={classes.containerTop}>
          <Button3 parah="Help">
            <QuestionIcon />
          </Button3>
          <Button3 parah="Settings">
            <SettingsIcon />
          </Button3>
        </div>
      </span>
    </Card>
  );
};

export default SideBar;
