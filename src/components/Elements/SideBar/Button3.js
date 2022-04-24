import React from "react";

import classes from "./Button3.module.css";

const Button3 = (props) => {
  const [hover,setHover] = React.useState(0);

  const hovering = () => {
    setHover(1)
  }

  const nothovering = () => {
    setHover(0)
  }

  return (
    <button
      className={props.isOpen ? classes.containerOpen : classes.containerClose}
      onClick={props.onClick}
      value={props.value}
      onMouseEnter={hovering}
      onMouseLeave={nothovering}
    >

      <div
        className={classes.icon}
        style={{ background: props.selected ? "#0415aa" : hover ? "#fafafb" : "none" , width: props.isOpen ? "44px" : "36px",   marginRight: props.isOpen ? "0.5vw" : "0" }}
      >
        {props.children}
      </div>
      <p className={classes.parah} style={{color : props.selected ? "#0415aa" : "#b2bfd0" ,   fontSize: props.isOpen ? "1.65vh" : "7px"}}>{props.parah}</p>
    </button>
  );
};

export default Button3;
