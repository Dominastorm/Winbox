import classes from "./Header.module.css";
import Card from "../../../UI/Card/Card";
import Button from "../../../UI/Button/Button";
import ArrowIcon from "../../../UI/ArrowIcon";

const Header = () => {
  return (
    <Card className={classes.background}>
      <div className={classes.background}>
        <button className={classes.back}>
          <div className={classes.icon}>
            <ArrowIcon rotate={classes.arrow} />
          </div>
        </button>
        <div>
          <p className={classes.parah}>
            useremail@gmail.com
          </p>
        </div>
      </div>
      <div className={classes.btn}>
        <Button className={classes.btn}>Add new inbox</Button>
      </div>
    </Card>
  );
};

export default Header;
