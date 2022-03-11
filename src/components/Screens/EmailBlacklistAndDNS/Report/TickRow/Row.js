import classes from "./Row.module.css";
import TickIcon from "./TickIcon";

const Row = (props) => {
  return (
    <div className={`${props.className}  ${classes.domain} `}>
      <div className={classes.flex}>
        <div className={classes.flex}>
            <TickIcon />
        </div>
        <div>
          <p className={classes.parah}>lorem ipsum.org</p>
        </div>
      </div>
    </div>
  );
};

export default Row;
