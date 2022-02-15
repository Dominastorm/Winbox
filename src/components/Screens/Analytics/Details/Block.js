import classes from "./Block.module.css";
import Card from "../../../UI/Card/Card";

const Block = (props) => {
  return (
    <Card className={classes.background}>
      <div className={classes.icon}>{props.children}</div>
      <div>
        <h3 className={classes.amount}>{props.amount}</h3>
        <p className={classes.detail}>{props.detail}</p>
      </div>
    </Card>
  );
};

export default Block;
