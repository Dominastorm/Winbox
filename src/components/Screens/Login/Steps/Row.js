import classes from "./Row.module.css";
import { Heading327 } from "../../../UI/Heading/Heading";

export const Row2 = (props) => {
  return (
    <div className={classes.container}>
      <div>{props.children}</div>
      <div className={classes.details}>
        <div>
          <h1 className={classes.stepnumber}>{props.stepnumber}</h1>
        </div>
        <div className={classes.cont}>
          <Heading327>{props.heading}</Heading327>
          <p className={classes.parah}>{props.parah}</p>
          <a className={classes.link}>{props.link}</a>
        </div>
      </div>
    </div>
  );
};

const Row = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <div>
          <h1 className={classes.stepnumber}>{props.stepnumber}</h1>
        </div>
        <div className={classes.cont}>
          <Heading327>{props.heading}</Heading327>
          <p className={classes.parah}>{props.parah}</p>
          <a className={classes.link}>{props.link}</a>
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Row;
