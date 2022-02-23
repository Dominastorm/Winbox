import classes from "./Input.module.css";

const Link = (props) => {
  return (
    <div className={classes.container}>
      <p className={classes.parah}>{props.children}</p>
      <input className={classes.input} placeholder={props.children}/>
    </div>
  );
};

export default Link;
