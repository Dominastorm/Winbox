import classes from "./SideBar.module.css";
import Card from "../../UI/Card/Card";
import { NavLink,useLocation } from "react-router-dom";
import React from "react";

import MessageIcon from "./icons/MessageIcon";
import QuestionIcon from "./icons/QuestionIcon";
import SettingsIcon from "./icons/SettingsIcon";
import SheildIcon from "./icons/SheildIcon";
import Button3 from "./Button3";

const SideBar = (props) => {
  const path = useLocation().pathname.split('/')[1] ;

  return (
    <Card className={classes.background}>
      <span className={classes.center}>
        <div className={classes.container}>
          <img src="images/expand.png" className={classes.expand} />
        </div>
        <div className={classes.border} />
        <div className={classes.container}  >
          <NavLink className={classes.removestyle} to="/inbox">
            <Button3 parah="Inboxes" selected={path == "inbox" || path == "/"  ? 1 : 0}>
              <MessageIcon />
            </Button3>
          </NavLink>
          <NavLink
            className={classes.removestyle}
            to="/email-blacklist-and-DNS-checker"
          >
            <Button3
              parah="Blacklists & DNS Checker"
              selected={path == "email-blacklist-and-DNS-checker" ? 1 : 0}
            >
              <SheildIcon />
            </Button3>
          </NavLink>
        </div>
        <div className={classes.border} />
      </span>
      <span className={classes.center}>
        <div className={classes.border} />
        <div className={classes.container}  >
          <NavLink className={classes.removestyle} to="/inbox">
            <Button3 parah="Help" selected={path == "help" ? 1 : 0}>
              <QuestionIcon />
            </Button3>
          </NavLink>
          <NavLink className={classes.removestyle} to="/settings">
            <Button3 parah="Settings" selected={path == "settings" ? 1 : 0}>
              <SettingsIcon />
            </Button3>
          </NavLink>
        </div>
      </span>
    </Card>
  );
};

export default SideBar;
