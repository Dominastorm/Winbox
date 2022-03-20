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
    "Jan21",
    "Jan22",
    "Jan23",
    "Jan24",
    "Jan25",
    "Jan26",
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
      8,
      7,
      11,
      13,
      4,
      2,
    ],
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
            label: "Sent",
            backgroundColor: "#70C4F7",
            data: data.Sent.dataSet,
          },
        ],
      }}
      height={440}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
        maintainAspectRatio: false,
        scales: {
          xAxes: {
            ticks: {
              font: {
                size: 7,
                weight: 600
              },
              padding: 5,
            },
            grid: {
              drawBorder: false,
              display: false,
            },
          },
          yAxes: {
            grid: {
              drawBorder: false,
              color: "#E7F5FE",
            },
            ticks: {
              font: {
                size: 9,
              },
              beginAtZero: true,
            },
          },
        },
      }}
    />
  );
}
