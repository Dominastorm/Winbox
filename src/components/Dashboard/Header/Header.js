import classes from "./Header.module.css";
import Card from "../../UI/Card/Card";

const Header = () => {
  return (
    <Card className={classes.background}>
      <span className={classes.logo}>
        <img src="images/logo.png" />
      </span>
      <span className={classes.profile}>
        <div>N</div>
        <div>
          <h3 className={classes.name}>Katarina</h3>
        </div>
        <div>
          <img src="images/profile.png" className={classes.userImg}/>
        </div>
      </span>
    </Card>
  );
};

export default Header;
