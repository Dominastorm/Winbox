import classes from "./Details.module.css";
import Card from "../../../../UI/Card/Card";
import ColHead from "./ColHead"

const Details = () => {
  return (
    <Card className={classes.background}>
      <ColHead className={classes.head}>Date</ColHead>
      <ColHead className={classes.head}>Interactions</ColHead>
      <ColHead className={classes.head}>Reply percent</ColHead>
      <ColHead className={classes.head}>Progress</ColHead>
      <ColHead className={classes.head}>Sent</ColHead>
      <ColHead className={classes.headlast}>Actions</ColHead>
    </Card>
  );
};

export default Details;
