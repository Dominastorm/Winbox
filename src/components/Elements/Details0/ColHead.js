import classes from "./ColHead.module.css";
import ArrowIcon from "../../Icons/ArrowIcon"

const ColHead = (props) => {
  return (
    <div className={`${classes.flex} ${props.className}`}>
      <div>
        <p className={classes.para}>{props.children}</p>
      </div>
      <div className={classes.icon}>
        <ArrowIcon/>
      </div>
    </div>
  );
};

export default ColHead;
