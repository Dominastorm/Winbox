import React from "react";

import classes from "./Button3.module.css";

const Button3 = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.icon}>
      {props.children}
      </div>
      <p className={classes.parah}>{props.parah}</p>
      </div>
  );
};

export default Button3;
