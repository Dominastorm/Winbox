import classes from "./Table.module.css";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";

const Table = (props) => {
  return (
    <Card className={classes.background}>
      <div>{props.children} </div>
      <div>
        <h3 className={classes.heading}>
          {props.heading}
        </h3>
      </div>
      <div>
        <p className={classes.parah}>
          {props.parah}
        </p>
      </div>
      <div>
        <Button className={classes.btn} onClick={props.onClick} value={props.value}>{props.buttontext}</Button>
      </div>
    </Card>
  );
};

export default Table;
