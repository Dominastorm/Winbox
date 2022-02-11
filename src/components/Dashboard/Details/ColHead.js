import classes from "./ColHead.module.css";

const ColHead = (props) => {
  return (
    <div className={`${classes.flex} ${props.className}`}>
      <div>
        <p className={classes.para}>{props.children}</p>
      </div>
      <div>
        <p>d</p>
      </div>
    </div>
  );
};

export default ColHead;
