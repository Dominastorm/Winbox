import React from "react";
import Hero from "../../../Elements/Hero/Hero";
import Details from "../../../Elements/Details/Details";
import Table from "../../../Elements/Table/Table";
import Header from "../Header/Header";
import TableImage from "../../../Icons/TableImage"

const MainBar = (props) => {
  return (
    <>
      <Header />
      <Hero heading="Warm up inbox" parah="Manage inboxes you want to warm-up (0/0 used)" buttontext="Add new inbox"/>
      <Details />
      <Table heading="Warm up your inbox to never land in spam anymore" parah="Run a new test to check email deliverability & spam insights" buttontext="New Test"><TableImage height="20vh"/></Table>
    </>
  );
};

export default MainBar;
