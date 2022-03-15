import classes from "./Row.module.css";
import Card from "../../../../../../UI/Card/Card";
import Button from "../../../../../../UI/Button/Button";

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
      <p className={classes.head}>{props.date}</p>
      <p className={classes.head}>{props.amount}</p>
      <p className={classes.head2}>{props.details}</p>
      <div className={classes.head}>
        <div
          className={classes.status}
          style={props.complete == "true" ? green : orange}
        >
          <p>{props.status}</p>
        </div>
      </div>
      <div className={classes.head}>
        <Button className={classes.button}>Open</Button>
      </div>
    </Card>
  );
};

export default Row;
