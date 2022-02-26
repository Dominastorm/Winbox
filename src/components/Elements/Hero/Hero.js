import classes from "./Hero.module.css";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";

const Hero = (props) => {
  return (
    <Card className={classes.background}>
      <div>
        <h1 className={classes.heading}>{props.heading}</h1>
        <p className={classes.parah}>{props.parah}</p>
      </div>
      <div>
        <Button className={classes.btn}>{props.buttontext}</Button>
      </div>
    </Card>
  );
};

export default Hero;
