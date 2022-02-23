import Chart from "chart.js/auto";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import classes from "./Doughnut.module.css";

export default function Dough() {
  const data = [20, 5];
  const labels = ["Inbox", "Spam"];
  const color = ["#109CF1", "#FC7676"];

  const customLabels = labels.map((label, index) => `${label}: ${data[index]}`);
  const text = data[0] + "/" + data[1];
  const percent = [
    (100 * data[0]) / (data[1] + data[0]) + "%",
    100 - (data[0] / (data[1] + data[0])) * 100 + "%",
  ];

  const chartdata = {
    labels: customLabels,
    responsive: true,
    offset: true,
    datasets: [
      {
        label: "Message Info",
        backgroundColor: color,
        data: data,
      },
    ],
  };

  return (
    <>
      <div className={classes.doughnutchart}>
        <React.StrictMode>
          <div className={classes.text}>
            <p>{text}</p>
          </div>
        </React.StrictMode>
        <Doughnut
          data={chartdata}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            datalabels: {
              display: true,
              color: "white",
            },
            tooltips: {
              backgroundColor: "#5a6e7f",
            },
          }}
        />
      </div>
      <div className={classes.analisys}>
        <div className={classes.row}>
          <div
            className={classes.color}
            style={{ backgroundColor: color[0] }}
          ></div>
          <div>
            <h3 className={classes.heading}>{percent[0]}</h3>
          </div>
          <div>
            <p className={classes.parah}>In Inbox</p>
          </div>
        </div>
        <div className={classes.row}>
          <div
            className={classes.color}
            style={{ backgroundColor: color[1] }}
          ></div>
          <div>
            <h3 className={classes.heading}>{percent[1]}</h3>
          </div>
          <div>
            <p className={classes.parah}>In Spam</p>
          </div>
        </div>
      </div>
    </>
  );
}
