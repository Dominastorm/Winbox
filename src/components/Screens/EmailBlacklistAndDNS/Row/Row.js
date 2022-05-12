import {Link} from "react-router-dom"

import classes from "./Row.module.css";
import Card from "../../../UI/Card/Card";
import DeleteIcon from "../../../Icons/DeleteIcon";
import ChartIcon from "../../../Icons/ChartIcon";

const Row = (props) => {
  console.log(props)
  return (
    <Card className={classes.background}>
      <p className={classes.head}>{props.inbox}</p>
      <p className={classes.head}>{props.subject}</p>
      <p className={classes.head}>{props.score}</p>
      <p className={classes.head}>{props.created}</p>
      <p className={classes.head}>{props.status}</p>
      <div className={classes.head2}>
      <Link className={classes.button} to="/email-blacklist-and-DNS-checker/report">
        <ChartIcon />
      </Link>
      <button className={classes.button}>
        <DeleteIcon />
      </button>
      </div>
    </Card>
  );
};

export default Row;
