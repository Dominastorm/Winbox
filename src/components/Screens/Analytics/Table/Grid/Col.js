import classes from "./Col.module.css";
import Card from "../../../../UI/Card/Card";

const Col = (props) => {
  return (
    <div className={`${classes.flex} ${props.className}`}>
        <p className={classes.para}>{props.children}</p>
    </div>
  );
};

export default Col;
