import React from "react";
import classes from "./Mainbar.module.css"
import Hero from "../../../Elements/Hero/Hero";
import Details from "../../../Elements/Details0/Details";
import Table from "../../../Elements/Table/Table";
import TableImage from "../Images/TableImage";
import Row from "../Row/Row";

const MainBar = (props) => {
  //  const data = [];

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
    />
  ));

  return (
    <>
      <Hero
        heading="Email Blacklists & DNS Cheker"
        parah="Check if you IPs & domains are blacklisted. Test your DNS settings to inprove your deliverability"
        buttontext="Run a new Test"
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
        >
          <TableImage />
        </Table>
      )}
    </>
  );
};

export default MainBar;
