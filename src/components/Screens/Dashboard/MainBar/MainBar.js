import React from "react";
import classes from "./MainBar.module.css";
import Step1 from "../PopUp/Step1/Step1";
import Step2 from "../PopUp/Step2/Step2";
import ConnectionUpdate from "../PopUp/Step2/ConnectionUpdate";
import Step3 from "../PopUp/Step3/Step3";
import Logout from "../PopUp/Logout/Logout";
import DeleteCampaign from "../PopUp/DeleteCampaign/DeleteCampaign";
import Hero from "../../../Elements/Hero/Hero";
import Details from "../../../Elements/Details/Details";
import Table from "./Table";
import Row from "../Row/Row";

const Dashboard = (props) => {
  const [showPopUp, setShowPopUp] = React.useState(0);
  const [connnectionPopUp, setConnectionPopUp] = React.useState(0);
  const [selectedInbox, setSelectedInbox] = React.useState(0);

  const renderPopUp = (event) => {
    setShowPopUp(event.currentTarget.value);
  };

  const renderConnectionPopUp = () => {
    setConnectionPopUp(1);
    setTimeout(closeConnectionPopUp, 1500);
  };

  const closeConnectionPopUp = () => {
    setConnectionPopUp(0);
  };

  const select = (event) => {
    setSelectedInbox(event.currentTarget.value);
  };

  return (
    <>
      {showPopUp === "1" && (
        <Step1
          selectedInbox={selectedInbox}
          select={select}
          close={{ function: renderPopUp, value: "0" }}
          next={{ function: renderPopUp, value: "2" }}
        />
      )}
      {showPopUp === "2" && (
        <Step2
          close={{ function: renderPopUp, value: "0" }}
          prev={{ function: renderPopUp, value: "1" }}
          next={{ function: renderPopUp, value: "0" }}
          func={renderConnectionPopUp}
          inboxProvider={selectedInbox}
        />
      )}
      {showPopUp === "4" && (
        <DeleteCampaign close={{ function: renderPopUp, value: "0" }} />
      )}
      {connnectionPopUp == "1" && <ConnectionUpdate />}
      <Hero
        heading="Warm up inbox"
        parah="Manage inboxes you want to warm-up (0/0 used)"
        buttontext="Add new inbox"
        className={classes.hero}
        onClick={renderPopUp}
        value={1}
      />
      <Details />
    <Table renderPopUp={renderPopUp}/>
    </>
  );
};

export default Dashboard;
