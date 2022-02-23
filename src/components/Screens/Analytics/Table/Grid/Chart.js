import classes from "./Chart.module.css";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

export default function Dough(props) {
  const data = [3, 1];
  const labels = ["Done", "Remaining"];
  const color = ["#109CF1", "#F3FAFE"];

  const customLabels = labels.map((label, index) => `${label}: ${data[index]}`);
  const text = (data[0] / (data[0] + data[1])) * 100 + "%";

  const chartdata = {
    responsive: true,
    datasets: [
      {
        label: "Progress",
        backgroundColor: color,
        data: data,
      },
    ],
  };

  return (
    <div className={`${classes.chart} ${props.className}`}>
        <div className={classes.container}>
        <div className={classes.text}>
          <p>{text}</p>
        </div>
        <div className={classes.dough}>
        <Doughnut
          data={chartdata}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
        </div>
        </div>
      </div>
  );
}
