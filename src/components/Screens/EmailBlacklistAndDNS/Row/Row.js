import classes from "./Row.module.css";
import Card from "../../../UI/Card/Card";
import DeleteIcon from "../../../Icons/DeleteIcon";
import ChartIcon from "../../../Icons/ChartIcon";

const Details = (props) => {
  return (
    <Card className={classes.background}>
      <p className={classes.head}>{props.inbox}</p>
      <p className={classes.head}>{props.subject}</p>
      <p className={classes.head}>{props.score}</p>
      <p className={classes.head}>{props.created}</p>
      <p className={classes.head}>{props.status}</p>
      <div className={classes.head2}>
        <ChartIcon/>
        <DeleteIcon/>
      </div>
    </Card>
  );
};

export default Details;
