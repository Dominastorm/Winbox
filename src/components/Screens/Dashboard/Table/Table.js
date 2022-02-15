import classes from "./Table.module.css";
import Card from "../../../UI/Card/Card";
import Button from "../../../UI/Button/Button";

const Table = () => {
  return (
    <Card className={classes.background}>
      <div ><img src="images/table.png" className={classes.image}/></div>
      <div>
        <h3 className={classes.heading}>Warm up your inbox to never land in spam anymore</h3>
      </div>
      <div>
        <p className={classes.parah}>Add your first to start to warm-up your email account</p>
      </div>
      <div>
        <Button className={classes.btn}>Get Started</Button>
      </div>
    </Card>
  );
};

export default Table;
