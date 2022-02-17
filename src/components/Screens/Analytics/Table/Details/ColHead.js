import classes from "./ColHead.module.css";

const ColHead = (props) => {
  return (
    <div className={`${classes.flex} ${props.className}`}>
        <p className={classes.para}>{props.children}</p>
    </div>
  );
};

export default ColHead;
