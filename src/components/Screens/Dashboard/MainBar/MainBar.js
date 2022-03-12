import React from "react";
import Hero from "../../../Elements/Hero/Hero";
import Details from "../../../Elements/Details/Details";
import Table from "../../../Elements/Table/Table";
import Header from "../Header/Header";
import Row from "../Row/Row";
import TableImage from "../../../Icons/TableImage";
import classes from "./MainBar.module.css"

const MainBar = (props) => {
  //  const data = [];

  const data = [
    {
      inbox: "emailofuser@gmail.com",
      sentToday: "1/1",
      created: "January 1, 2022",
      status: "Started",
      complete: "false"
    },
    {
      inbox: "emailofuser@gmail.com",
      sentToday: "1/1",
      created: "January 1, 2022",
      status: "Completed",
      complete: "true"
    },

  ];

  const table = data.map((rowdetail) => (
    <Row
      inbox={rowdetail.inbox}
      sentToday={rowdetail.sentToday}
      created={rowdetail.created}
      status={rowdetail.status}
      complete={rowdetail.complete}
    />
  ));

  return (
    <>
      <Header />
      <Hero
        heading="Warm up inbox"
        parah="Manage inboxes you want to warm-up (0/0 used)"
        buttontext="Add new inbox"
      />
      <Details />

      {data.length != 0 ? (
        <div className={classes.table}>
          <ul>{table}</ul>
        </div>
      ) : (
        <Table
          heading="Warm up your inbox to never land in spam anymore"
          parah="Run a new test to check email deliverability & spam insights"
          buttontext="New Test"
        >
          <TableImage height="20vh" />
        </Table>
      )}
    </>
  );
};

export default MainBar;
