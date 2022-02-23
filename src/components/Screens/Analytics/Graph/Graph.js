import classes from "./Graph.module.css";
import Card from "../../../UI/Card/Card";
import Button from "../../../UI/Button/Button";
import Heading from "../../../UI/Heading/Heading";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import React from "react";
const Graph = () => {
  return (
    <div className={classes.background}>
      <Card className={classes.bar}>
        <div className={classes.heading}>
          <Heading>Inbox warning plan</Heading>

          <div className={classes.barchart}>
            <React.StrictMode>
              <BarChart />
            </React.StrictMode>
          </div>
        </div>
      </Card>
      <Card className={classes.circle}>
        <div className={classes.heading}>
          <Heading>Inbox vs Spam</Heading>
          <DoughnutChart />
        </div>
      </Card>
    </div>
  );
};

export default Graph;
