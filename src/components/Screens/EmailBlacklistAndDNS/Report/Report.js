import React from "react";
import classes from "./Report.module.css";

import Card from "../../../UI/Card/Card";
import Header from "../../../Elements/Headerahb/Header";
import Drive from "../../../Elements/DivIHPb/DivIHPb";
import MessageIcon from "./Icons/MessageIcon";
import ScoreIcon from "./Icons/ScoreIcon";
import Heading, { Heading186 } from "../../../UI/Heading/Heading";
import DropdownIcon from "./Icons/DropdownIcon";
import Row from "./TickRow/Row";
import LinkCopiedPopUp from "../Popups/LinkCopiedPopUp";

const Report = (props) => {
  const [showPopUp, setShowPopUp] = React.useState("0");
  const [openBox, setOpenBox] = React.useState(0);

  const openDialogBox = () => {
    setOpenBox(!openBox);
  }

  const closePopUp = () => {
    setShowPopUp("0");
  };

  const renderPopUp = () => {
    setShowPopUp("1");
    setTimeout(closePopUp, 1500);
  };

  return (
    <>
      {showPopUp=="1" && <LinkCopiedPopUp />}
      <Header
        parah="useremail@gmail.com"
        buttontext="Share my Report"
        to="/email-blacklist-and-DNS-checker"
      />
      <div className={classes.flexhero}>
        <Drive
          heading="83/100"
          parah="Email Deliverability Score"
          className={classes.margin}
        >
          <ScoreIcon />
        </Drive>
        <Drive
          heading="Want to increase your deliverability"
          parah="Start to warm-up inbox"
          buttontext="Start"
          className={classes.nomargin}
        >
          <MessageIcon />
        </Drive>
      </div>
      <Card className={classes.domaincheck}>
        <Heading>Domain Blacklist Check</Heading>
        <div className={classes.flexdc}>
          <div className={classes.status}>
            <h3>Good</h3>
          </div>
          <button className={classes.dropdownbtn} onClick={openDialogBox}>
            <DropdownIcon isOpen={openBox}/>
          </button>
        </div>
      </Card>
       <Card className={classes.bluebox} style={{ display: openBox ?  "flex" : "none"}}>
        <Heading186 >All is good, send the email you want to test</Heading186>
        <p className={classes.parah}>
          Your emails can be reported as spam if you don’t offer an easy way for
          recipients to unsuscribe to your mail list. This can hurt badly your
          sender reputation.
        </p>
      </Card>
      <Card className={classes.domain}>
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </Card>
    </>
  );
};

export default Report;
