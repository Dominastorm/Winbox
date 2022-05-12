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

var request = new XMLHttpRequest();
var da, score, table, status, message, info;

const Report = (props) => {
  const [showPopUp, setShowPopUp] = React.useState("0");
  const [openBox, setOpenBox] = React.useState(0);
  const [loading, setLoading] = React.useState(1);

  React.useEffect(() => {
    request.open(
      "GET",
      "https://private-9933d8-winbox.apiary-mock.com/email_score_detailed"
    );

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        da = JSON.parse(this.responseText);
        console.log(da.items);
        score = da.score + "/100";
        status = da.items[0].status;
        message = da.items[0].message;
        info = da.items[0].info_message;
        table = da.items[0].items_list.map((rowdetail) =>
          <Row name={rowdetail.name} status={rowdetail.status}/>
        );
        setLoading(0);
      }
    };
    request.send();
  }, []);

  const openDialogBox = () => {
    setOpenBox(!openBox);
  };

  const closePopUp = () => {
    setShowPopUp("0");
  };

  const renderPopUp = () => {
    setShowPopUp("1");
    setTimeout(closePopUp, 1500);
  };

  return (
    <>
      {showPopUp == "1" && <LinkCopiedPopUp />}
      <Header
        parah="useremail@gmail.com"
        buttontext="Share my Report"
        to="/email-blacklist-and-DNS-checker"
      />
      <div className={classes.flexhero}>
        <Drive
          heading={score}
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
            <h3>{status}</h3>
          </div>
          <button className={classes.dropdownbtn} onClick={openDialogBox}>
            <DropdownIcon isOpen={openBox} />
          </button>
        </div>
      </Card>
      <Card
        className={classes.bluebox}
        style={{ display: openBox ? "flex" : "none" }}
      >
        <Heading186>{message}</Heading186>
        <p className={classes.parah}>{info}</p>
      </Card>
      <Card className={classes.domain}>
        {table}
      </Card>
    </>
  );
};

export default Report;
