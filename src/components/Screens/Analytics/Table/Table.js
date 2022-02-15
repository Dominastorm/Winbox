import classes from "./Table.module.css";
import Card from "../../../UI/Card/Card";
import Button from "../../../UI/Button/Button";

const Table= () => {
  return (
    <Card className={classes.background}>
      <div>
        <button></button>
        <p className={classes.parah}>Manage inboxes you want to warm-up (0/0 used)</p>
      </div>
      <div>
        <Button className={classes.btn}>Add new inbox</Button>
      </div>
    </Card>
  );
};

export default Table;
