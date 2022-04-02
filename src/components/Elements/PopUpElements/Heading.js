import classes from "./Heading.module.css";
import DelIcon from "../../Icons/DelIcon"

const Heading = (props) => {
  return (
    <div className={classes.head}>
      <div className={classes.flex}>
        <h1 className={classes.heading}>{props.step}</h1>
        <h1 className={classes.headingblue}>{props.children}</h1>
      </div>
      <div className={classes.icon}>
        <DelIcon onClick={props.onClick}/>
      </div>
    </div>
  );
};

export default Heading;
