import classes from "./Header.module.css";
import Card from "../../UI/Card/Card";
import NotifIcon from "./NotifIcon";

const Header = () => {
  return (
    <Card className={classes.background}>
      <span className={classes.logo}>
        <img src="images/logo.png" />
      </span>
      <span className={classes.profile}>
        <div className={classes.icon}>
          <div>
            <NotifIcon />
          </div>
        </div>
        <div>
          <h3 className={classes.name}>Katarina</h3>
        </div>
        <div>
          <img src="images/profile.png" className={classes.userImg} />
        </div>
      </span>
    </Card>
  );
};

export default Header;
