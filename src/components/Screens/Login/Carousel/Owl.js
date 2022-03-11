import React from "react";
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import classes from "./owl.module.css";
import "./owl.css";
import AOLIcon from "./Icons/AOLIcon";
import AWSIcon from "./Icons/awsIcon";
import GoogleIcon from "./Icons/GoogleIcon";
import SalesforceIcon from "./Icons/SalesforceIcon";
import SquareIcon from "./Icons/SquareIcon";
import SwirlyIcon from "./Icons/SwirlyIcon";

const Owl = (props) => {
  return (
    <div className={classes.container}>
      <OwlCarousel
        className={`owl-theme  ${classes.div} `}
        loop={true}
        margin={10}
        autoWidth
        dots={false}
        nav
        navElement="div"
        navText={[
          '<div style="width:2vw;height:5.2vh;border-radius:100px;display:flex;align-items:center;justify-content:center"><p style="margin:0;font-weight:600;font-size:3vh;"><</div>',
          '<div style="width:2vw;height:5.2vh;border-radius:100px;display:flex;align-items:center;justify-content:center"><p style="margin:0;font-weight:600;font-size:3vh;">></div>',
        ]}
      >
        <div className={classes.card}><GoogleIcon/></div>
        <div className={classes.card}><SquareIcon/></div>
        <div className={classes.card}><SwirlyIcon/></div>
        <div className={classes.card}><AWSIcon/></div>
        <div className={classes.card}><SalesforceIcon/></div>
        <div className={classes.card}><AOLIcon/></div>
      </OwlCarousel>
    </div>
  );
};

export default Owl;
