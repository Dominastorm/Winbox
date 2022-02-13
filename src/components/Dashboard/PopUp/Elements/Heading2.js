import classes from "./Heading2.module.css";

const Heading2 = (props) => {
  return (
    <div>
      <h3 className={classes.heading3}>
        {props.children}
      </h3>
    </div>
  );
};

export default Heading2;
