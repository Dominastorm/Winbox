import classes from "./Row.module.css";
import Col from "./Col"
import Card from "../../../../UI/Card/Card";

const Row = (props) => {
  return (
    <Card className={classes.background}>
      <Col className={classes.head}>Inbox</Col>
      <Col className={classes.head}>Sent today</Col>
      <Col className={classes.head}>Created</Col>
      <Col className={classes.head}>Status</Col>
      <Col className={classes.head}>Actions</Col>
    </Card>
  );
};

export default Row;
