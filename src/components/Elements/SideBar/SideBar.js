import classes from "./SideBar.module.css";
import Card from "../../UI/Card/Card";
import MessageIcon from "./icons/MessageIcon";
import QuestionIcon from "./icons/QuestionIcon";
import SettingsIcon from "./icons/SettingsIcon";
import SheildIcon from "./icons/SheildIcon";
import Button3 from "./Button3";

const SideBar = (props) => {
  return (
    <Card className={classes.background}>
      <span className={classes.center}>
        <div className={classes.container}>
          <img src="images/expand.png" className={classes.expand} />
        </div>
        <div className={classes.border} />
        <div className={classes.container}>
          <Button3
            parah="Inboxes"
            onClick={props.renderPage}
            value="1"
            selected={props.selectedPage == 1 ? 1 : 0}
          >
            <MessageIcon />
          </Button3>
          <Button3
            parah="Blacklists & DNS Checker"
            onClick={props.renderPage}
            value="2"
            selected={props.selectedPage == 2 ? 1 : 0}
          >
            <SheildIcon />
          </Button3>
        </div>
        <div className={classes.border} />
      </span>
      <span className={classes.center}>
        <div className={classes.border} />
        <div className={classes.container}>
          <Button3
            parah="Help"
            onClick={props.renderPage}
            value="3"
            selected={props.selectedPage == 3 ? 1 : 0}
          >
            <QuestionIcon />
          </Button3>
          <Button3
            parah="Settings"
            onClick={props.renderPage}
            value="4"
            selected={props.selectedPage == 4 ? 1 : 0}
          >
            <SettingsIcon />
          </Button3>
        </div>
      </span>
    </Card>
  );
};

export default SideBar;
