import { Link } from "react-router-dom";

import classes from "./Header.module.css";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import ArrowIcon from "../../Icons/ArrowIcon";

const Header = (props) => {
  return (
    <Card className={classes.background}>
      <div className={classes.flex}>
        {props.to && (
          <Link className={classes.back} to={props.to}>
            <button className={classes.goBackButton}>
              <ArrowIcon rotate={classes.arrow} />
            </button>
          </Link>
        )}
        {!props.to && (
          <button className={classes.back}>
            <button className={classes.goBackButton} onClick={props.goBack}>
              <ArrowIcon rotate={classes.arrow} />
            </button>
          </button>
        )}
        <div>
          <p className={classes.parah}>{props.parah}</p>
        </div>
      </div>
      {props.buttontext && (
        <div className={classes.btn}>
          <Button className={classes.btn} onClick={props.buttonOnClick}>
            {props.buttontext}
          </Button>
        </div>
      )}
    </Card>
  );
};

export default Header;
