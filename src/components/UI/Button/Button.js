import React from "react";
import { Link } from "react-router-dom";

import classes from "./Button.module.css";

export const LinkButton = (props) => {
  return (
    <Link to={props.to} className={classes.removeStyle}>
      <div
        type={props.type || "button"}
        className={`${props.className}  ${classes.button} `}
        value={props.value}
      >
        {props.children}
      </div>
    </Link>
  );
};

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`${props.className}  ${classes.button} `}
      onClick={props.onClick}
      disabled={props.disabled}
      value={props.value}
    >
      {props.children}
    </button>
  );
};

export default Button;
