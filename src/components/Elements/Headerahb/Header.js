import classes from "./Header.module.css";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import ArrowIcon from "../../Icons/ArrowIcon";

const Header = (props) => {
  return (
    <Card className={classes.background}>
      <div className={classes.flex}>
        <button className={classes.back}>
          <div className={classes.icon}>
            <ArrowIcon rotate={classes.arrow} />
          </div>
        </button>
        <div>
          <p className={classes.parah}>
            {props.parah}
          </p>
        </div>
      </div>
      <div className={classes.btn}>
        <Button className={classes.btn}>{props.buttontext}</Button>
      </div>
    </Card>
  );
};

export default Header;
