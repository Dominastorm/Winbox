import classes from "./Heading.module.css";

const Heading = (props) => {
  return (
    <div className={classes.head}>
      <div className={classes.flex}>
        <h1 className={classes.heading}>{props.step}</h1>
        <h1 className={classes.headingblue}>{props.children}</h1>
      </div>
      <div>
        <h3>x</h3>
      </div>
    </div>
  );
};

export default Heading;
