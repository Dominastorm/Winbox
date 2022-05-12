import React from "react";
import classes from "./Mainbar.module.css";
import Hero from "../../../Elements/Hero/Hero";
import Details from "../../../Elements/Details0/Details";
import Table from "../../../Elements/Table/Table";
import TableImage from "../Images/TableImage";
import Runtest from "../Popups/Runtest";
import EmailSpamChecker from "../Popups/EmailSpamChecker";
import Row from "../Row/Row";

var request = new XMLHttpRequest();
var da;
var table;

const MainBar = (props) => {
  const [showPopUp, setShowPopUp] = React.useState("0");
  const [loading, setLoading] = React.useState(1);

  const renderPopUp = (event) => {
    setShowPopUp(event.currentTarget.value);
  };

  React.useEffect(() => {
    request.open(
      "GET",
      "https://private-9933d8-winbox.apiary-mock.com/email_score"
    );

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        da = JSON.parse(this.responseText);
        console.log(da);
        table = da.map((rowdetail) => (
          <Row
            inbox={rowdetail.email_id}
            subject={rowdetail.subject}
            score={rowdetail.score}
            created={rowdetail.date}
            status={rowdetail.status}
            to="/email-blacklist-and-DNS-checker/report"
          />
        ));
        setLoading(0);
      }
    };
    request.send();
  }, []);

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
      {da != undefined ? (
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
