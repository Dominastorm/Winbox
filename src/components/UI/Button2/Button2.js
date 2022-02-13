import React from "react";

import classes from "./Button2.module.css";

const Button = (props) => {
  return (
    <div className={props.className}>
      <button className={`${classes.button} ${props.btnClass}`}>
        <div className={props.logoClass}>{props.children}</div>
        <div><h3 className={classes.heading3}>{props.heading}</h3></div>
        <div><p className={classes.para}>{props.parah}</p></div>
      </button>
      </div>

  );
};

export default Button;
