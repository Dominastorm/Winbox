import classes from "./Row.module.css";
import Col from "./Col";
import Card from "../../../../UI/Card/Card";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";

const Row = (props) => {
  return (
    <Card className={classes.background}>
      <Col className={classes.head}>{props.date}</Col>
      <Col className={classes.head}>{props.interactions}</Col>
      <Col className={classes.head}>{props.replypercent}</Col>
      <Col className={classes.head}>{props.progress}</Col>
      <Col className={classes.head}>{props.sent}</Col>
      <Col className={classes.head}>
        <DeleteIcon />
        <EditIcon />
      </Col>
    </Card>
  );
};

export default Row;
