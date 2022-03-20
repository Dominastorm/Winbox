import classes from "./Details.module.css";
import Card from "../../../../../../UI/Card/Card";
import ColHead from "./ColHead"

const Details = (props) => {
  return (
    <Card className={classes.background}>
      <ColHead className={classes.head}>Date</ColHead>
      <ColHead className={classes.head}>Amount</ColHead>
      <ColHead className={classes.head2}>Details</ColHead>
      <ColHead className={classes.head}>Status</ColHead>
      <ColHead className={classes.headlast}>Receipt</ColHead>
    </Card>
  );
};

export default Details;
