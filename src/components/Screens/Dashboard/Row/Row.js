import { Link } from "react-router-dom";

import classes from "./Row.module.css";
import Card from "../../../UI/Card/Card";
import DeleteIcon from "../../../Icons/DeleteIcon";
import ChartIcon from "../../../Icons/ChartIcon";

const Row = (props) => {
  const orange = {
    backgroundColor: "rgba(252, 179, 118, 0.1)",
    color: "#fcb376",
  };
  const green = {
    backgroundColor: "rgba(94, 202, 163, 0.1)",
    color: "#5ECAA3",
  };

  return (
    <Card className={classes.background}>
      <p className={classes.head}>{props.inbox}</p>
      <p className={classes.head}>{props.sentToday}</p>
      <p className={classes.head}>{props.created}</p>
      <div className={classes.head}>
        <div
          className={classes.status}
          style={props.status == "off" ? orange : green}
        >
          <p>{props.status}</p>
        </div>
      </div>
      <div className={classes.head2}>
        <label className={classes.switch}>
          <input type="checkbox" />
          <span className={classes.slider}></span>
        </label>
        <Link to="/inbox/analytics" >
          <ChartIcon />
        </Link>
        <button className={classes.button} onClick={props.DeleteCampaignPopUp.function} value="4">
          <DeleteIcon />
        </button>
      </div>
    </Card>
  );
};

export default Row;
