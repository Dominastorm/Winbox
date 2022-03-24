import classes from "./InputDate.module.css";
import CalenderIcon from "./Icons/CalenderIcon";
import ToFromIcon from "./Icons/ToFromIcon";

const Link = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <p className={classes.parah}>Warm-up timming range</p>
        <p className={classes.asterik}>*</p>
      </div>
      <button className={classes.button} onClick={props.onClick}>
        <p className={classes.buttonparah}>Start Date</p>
        <ToFromIcon/>
        <p className={classes.buttonparah}>End Date</p>
        <CalenderIcon />
      </button>
    </div>
  );
};

export default Link;
