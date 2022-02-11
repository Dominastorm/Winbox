import classes from "./Hero.module.css";
import Card from "../../UI/Card";

const Hero = () => {
  return (
    <Card className={classes.background}>
      <div></div>
      <div>
        <button>Add new inbox</button>
      </div>
    </Card>
  );
};

export default Hero;
