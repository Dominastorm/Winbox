import classes from "./Row.module.css";
import TickIcon from "./TickIcon";

const Row = (props) => {
  return (
    <div className={`${props.className}  ${classes.domain} `}>
      <div className={classes.flex}>
        <div className={classes.flex}>
            <TickIcon color={props.status== "good" ? "blue" : "yellow"}/>
        </div>
        <div>
          <p className={classes.parah}>{props.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Row;
