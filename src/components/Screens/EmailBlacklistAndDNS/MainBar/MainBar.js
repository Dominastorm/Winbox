import React from "react";
import classes from "./Mainbar.module.css";
import Hero from "../../../Elements/Hero/Hero";
import Details from "../../../Elements/Details0/Details";
import Table from "../../../Elements/Table/Table";
import TableImage from "../Images/TableImage";
import Runtest from "../Popups/Runtest";
import EmailSpamChecker from "../Popups/EmailSpamChecker";
import Row from "../Row/Row";

const MainBar = (props) => {
  const [showPopUp, setShowPopUp] = React.useState("0");

  const renderPopUp = (event) => {
    setShowPopUp(event.currentTarget.value);
  };

  // const data = [];

  const data = [
    {
      inbox: "Awaiting email...",
      subject: "-",
      score: "-",
      created: "January 1, 2022",
      status: "Pending",
    },
    {
      inbox: "Awaiting email...",
      subject: "-",
      score: "-",
      created: "January 1, 2022",
      status: "Pending",
    },
    {
      inbox: "Awaiting email...",
      subject: "-",
      score: "-",
      created: "January 1, 2022",
      status: "Pending",
    },
    {
      inbox: "Awaiting email...",
      subject: "-",
      score: "-",
      created: "January 1, 2022",
      status: "Pending",
    },
  ];

  const table = data.map((rowdetail) => (
    <Row
      inbox={rowdetail.inbox}
      subject={rowdetail.subject}
      score={rowdetail.score}
      created={rowdetail.created}
      status={rowdetail.status}
      to="/email-blacklist-and-DNS-checker/report"
    />
  ));

  return (
    <>
      {showPopUp === "1" && (
        <Runtest
          close={{ function: renderPopUp, value: "0" }}
          next={{ function: renderPopUp, value: "2" }}
        />
      )}
      {showPopUp === "2" && (
        <EmailSpamChecker close={{ function: renderPopUp, value: "0" }} />
      )}
      <Hero
        heading="Email Blacklists & DNS Cheker"
        parah="Check if you IPs & domains are blacklisted. Test your DNS settings to improve your deliverability"
        buttontext="Run a new Test"
        onClick={renderPopUp}
        value="1"
      />
      <Details />
      {data.length != 0 ? (
        <div className={classes.table}>
          <ul>{table}</ul>
        </div>
      ) : (
        <Table
          heading="Test your Email Deliverability"
          parah="Run a new test to check email deliverability & spam insights"
          buttontext="New Test"
          onClick={renderPopUp}
          value="1"
        >
          <TableImage />
        </Table>
      )}
    </>
  );
};

export default MainBar;
