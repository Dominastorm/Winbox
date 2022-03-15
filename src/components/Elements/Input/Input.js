import classes from "./Input.module.css";

const Link = (props) => {
  return (
    <div className={classes.container}>
    <div>
      <p className={classes.parah}>{props.children}</p>
      {props.required && <p className={classes.asterik}>*</p>}
      </div>
      <input className={`${props.className}  ${classes.input} `} placeholder={props.children}/>
    </div>
  );
};

export default Link;
