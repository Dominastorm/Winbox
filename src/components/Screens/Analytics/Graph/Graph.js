import classes from "./Graph.module.css";
import Card from "../../../UI/Card/Card";
import Button from "../../../UI/Button/Button";
import Heading from "../../../UI/Heading/Heading";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import Details from "../Details/Details";

import React from "react";

var request = new XMLHttpRequest();
var data;

const Graph = () => {
  const [loading, setLoading] = React.useState(1);

  React.useEffect(() => {
    request.open("GET", "https://private-9933d8-winbox.apiary-mock.com/report");

    request.onreadystatechange = function() {
      if (this.readyState === 4) {
        data = JSON.parse(this.responseText);
        setLoading(0);
      }
    };

    request.send();
  }, []);

  return (<> {
    loading == 0 && <Details data={data}/>
  } < div className = {
    classes.background
  } > <Card className={classes.bar}>
    <div className={classes.heading}>
      <Heading>Inbox warning plan</Heading>
      <div className={classes.barchart}>
        <BarChart/>
      </div>
    </div>
  </Card>
  <Card className={classes.circle}>
    <div className={classes.heading}>
      <Heading>Inbox vs Spam</Heading>
      {loading == 0 && <DoughnutChart data={data}/>}
    </div>
  </Card>
</div> < />
);
};

export default Graph;
