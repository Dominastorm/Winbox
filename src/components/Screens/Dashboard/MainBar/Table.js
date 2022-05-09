import React from "react";
import classes from "./MainBar.module.css";
import Details from "../../../Elements/Details/Details";
import Table from "../../../Elements/Table/Table";
import TableImage from "../../../Icons/TableImage";
import Row from "../Row/Row";

var request = new XMLHttpRequest();
var da;
var table;

const TableCom = (props) => {
  const [loading, setLoading] = React.useState(1);

  React.useEffect(() => {
    request.open(
      "GET",
      "https://private-9933d8-winbox.apiary-mock.com/connected_email"
    );

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        da = JSON.parse(this.responseText).results;
        table = da.map((rowdetail) => (
          <Row
            inbox={rowdetail.email}
            sentToday={rowdetail.sent_today}
            created={rowdetail.date_added}
            status={rowdetail.warm_status}
            renderAnalysis={props.renderAnalysis}
            DeleteCampaignPopUp={{
              function: props.renderPopUp,
              open: "4",
              close: "0",
            }}
          />
        ));
        setLoading(0);
      }
    };
    request.send();
  }, []);

  return (
    <>
      {da != undefined ? (
        <div className={classes.table}>
          <ul>{table}</ul>
        </div>
      ) : (
        <Table
          heading="Warm up your inbox to never land in spam anymore"
          parah="Run a new test to check email deliverability & spam insights"
          buttontext="New Test"
          onClick={props.renderPopUp}
          value={1}
        >
          <TableImage height="20vh" />
        </Table>
      )}
    </>
  );
};

export default TableCom;
