import React from "react";
import classes from "./Graph.module.css";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

var request = new XMLHttpRequest();
var arr;
var data;

export default function App() {
  const [loading, setLoading] = React.useState(1);

  React.useEffect(() => {
    data = {
      labels: ['2022-05-01','2022-05-02','2022-05-03','','','','','','','','','','','','','','','','','','','','',],
      Sent: {
        label: "Sent",
        dataSet: [],
      },
      Opened: {
        label: "Opened",
        dataSet: [],
      },
      Spam: {
        label: "Spam",
        dataSet: [],
      },
      Replies: {
        label: "Replies",
        dataSet: [],
      },
    };

    request.open(
      "GET",
      "https://private-9933d8-winbox.apiary-mock.com/warm_plan"
    );

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        arr = JSON.parse(this.responseText);
        arr.forEach((obj) => {
          console.log(obj.date)
          data.Sent.dataSet.push(obj.sent);
          data.Opened.dataSet.push(obj.open);
          data.Spam.dataSet.push(obj.spam);
          data.Replies.dataSet.push(obj.replies);
        });
        setLoading(0);
      }
    };

    request.send();
  }, []);

  return (
    <>
      {loading == 0 && (
        <div className={classes.barchart}>
          <React.StrictMode>
            <Bar
              pointstyle="star"
              data={{
                labels: data.labels,
                responsive: true,
                offset: true,
                datasets: [
                  {
                    label: "Replies",
                    borderColor: "#FCB376",
                    backgroundColor: "white",
                    data: data.Replies.dataSet,
                    cubicInterpolationMode: "monotone",
                    borderWidth: 2,
                    type: "line",
                  },
                  {
                    label: "Spam",
                    backgroundColor: "#FC7676",
                    maxLength: 10,
                    data: data.Spam.dataSet,
                  },
                  {
                    label: "Opened",
                    backgroundColor: "#70C4F7",
                    data: data.Opened.dataSet,
                  },
                  {
                    label: "Sent",
                    backgroundColor: "#E7F5FE",
                    data: data.Sent.dataSet,
                  },
                ],
              }}
              height={440}
              options={{
                plugins: {
                  legend: {
                    display: true,
                    position: "bottom",
                    align: "center",
                    labels: {
                      font: {
                        size: 10,
                      },
                      usePointStyle: true,
                    },
                  },
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  xAxes: {
                    stacked: true,
                    ticks: {
                      font: {
                        size: 9,
                      },
                      padding: 5,
                    },
                    grid: {
                      drawBorder: false,
                      display: false,
                    },
                  },
                  yAxes: {
                    stacked: false,
                    grid: {
                      drawBorder: false,
                      color: "#E7F5FE",
                    },
                    ticks: {
                      font: {
                        size: 9,
                      },
                      beginAtZero: true,
                      maxTicksLimit: 6,
                    },
                  },
                },
                elements: {
                  point: {
                    backgroundColor: "white",
                    radius: 5,
                  },
                },
              }}
            />
          </React.StrictMode>
        </div>

      )}
    </>
  );
}
