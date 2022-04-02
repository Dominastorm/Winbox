import classes from "./Header.module.css";
import Card from "../../UI/Card/Card";
import Logo from "../../Icons/Logo";
import NotifIcon from "./NotifIcon";

const Header = () => {
  return (
    <Card className={classes.background}>
      <div className={classes.flex}>
        <Logo />
      </div>
      <div className={classes.flex}>
        <NotifIcon className={classes.icon} />
        <h3 className={classes.name}>Katarina</h3>
        <img src="images/profile.png" className={classes.userImg} />
      </div>
    </Card>
  );
};

export default Header;
