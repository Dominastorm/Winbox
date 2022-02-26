import classes from "./Details.module.css";
import Card from "../../UI/Card/Card";
import ColHead from "./ColHead"

const Details = () => {
  return (
    <Card className={classes.background}>
      <ColHead className={classes.head}>Inbox</ColHead>
      <ColHead className={classes.head}>Subject</ColHead>
      <ColHead className={classes.head}>Score</ColHead>
      <ColHead className={classes.head}>Created</ColHead>
      <ColHead className={classes.head}>Status</ColHead>
      <ColHead className={classes.headlast}>Actions</ColHead>
    </Card>
  );
};

export default Details;
