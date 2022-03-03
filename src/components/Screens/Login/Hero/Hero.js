import classes from "./Hero.module.css";
import Button from "../../../UI/Button/Button";
import Card from "../../../UI/Card/Card"

const Hero = (props) => {
  return (
      <Card className={classes.container}>
          <div className={`${classes.wow} ${classes.heroText} ${classes.fadeInUp}`} data-wow-delay="0.2s">
            <h1 className={classes.heroTitle}>
              Warm-up your inbox.
            </h1>
            <h3 className={classes.heading}>
            So that your mail no longer lands in spam.
            </h3>
            <p className={classes.heroParah}>
              Reach your leads with Winbox, the tool that raises your inbox reputation & increases your email deliverability.
            </p>
            <Button href="#" className={classes.button}>CTA Button Text</Button>
          </div>

          <div className={`${classes.wow} ${classes.heroShape} ${classes.fadeInUp}`} data-wow-delay="0.3s">
            <img src="https://getwinbox.online/static/assets/image/bannerwin.gif" alt="banner" className={classes.gif}/>
          </div>
      </Card>
  );
};

export default Hero;
