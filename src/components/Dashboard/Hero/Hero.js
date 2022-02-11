import classes from "./Hero.module.css";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";

const Hero = () => {
  return (
    <Card className={classes.background}>
      <div>
        <h1>Warm up inbox</h1>
        <p>Manage inboxes you want to warm-up (0/0 used)</p>
      </div>
      <div>
        <Button className={classes.btn}>Add new inbox</Button>
      </div>
    </Card>
  );
};

export default Hero;
