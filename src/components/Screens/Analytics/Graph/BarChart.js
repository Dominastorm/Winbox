import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const data = {
  labels: [
    "Jan1",
    "Jan2",
    "Jan3",
    "Jan4",
    "Jan5",
    "Jan6",
    "Jan7",
    "Jan8",
    "Jan9",
    "Jan10",
    "Jan11",
    "Jan12",
    "Jan13",
    "Jan14",
    "Jan15",
    "Jan16",
    "Jan17",
    "Jan18",
    "Jan19",
    "Jan20",
  ],
  Sent: {
    label: "Sent",
    dataSet: [
      15,
      7,
      11,
      13,
      4,
      2,
      8,
      8,
      7,
      21,
      13,
      4,
      2,
      8,
      8,
      7,
      11,
      13,
      4,
      2,
    ],
  },
  Scheduled: {
    label: "Scheduled",
    dataSet: [
      16,
      12,
      18,
      23,
      14,
      12,
      18,
      18,
      17,
      41,
      23,
      14,
      12,
      18,
      18,
      17,
      21,
      14,
      14,
      12,
    ],
  },
  Spam: {
    label: "Spam",
    dataSet: [1, 2, 8, 3, 4, 2, 2, 3, 4, 1, 2, 4, 2, 1, 1, 4, 2, 2, 3, 5],
  },
  Replies: {
    label: "Replies",
    dataSet: [4, 5, 8, 6, 7, 4, 5, 4, 6, 2, 2, 4, 2, 4, 7, 4, 2, 6, 8, 5],
  },
};

export default function App() {
  return (
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
            data: data.Spam.dataSet,
          },
          {
            label: "Sent",
            backgroundColor: "#70C4F7",
            data: data.Sent.dataSet,
          },
          {
            label: "Scheduled",
            backgroundColor: "#E7F5FE",
            data: data.Scheduled.dataSet,
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
                size: 10
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
              font:{
                size:9,
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
              font:{
                size:9,
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
  );
}
