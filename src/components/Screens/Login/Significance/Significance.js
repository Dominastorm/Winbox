import classes from "./Significance.module.css";
import { Heading447, Heading327 } from "../../../UI/Heading/Heading";
import Card from "../../../UI/Card/Card";

const Significance = (props) => {
  return (
    <div className={classes.container}>
      <Card className={classes.cont}>
        <Heading447 className={classes.heading}>
          What is the significance of email <br />
          warm-up
        </Heading447>
        <p className={classes.headingparah}>
          51% of emails sent end up in spam folders What about your emails?
        </p>
      </Card>
      <Card className={classes.con}>
        <div>
          <img
            src="https://getwinbox.online/static/assets/image/bannerwin.gif"
            alt="banner"
            className={classes.gif}
          />
        </div>
        <div className={classes.details}>
          <Heading327 className={classes.headingred}>Without </Heading327>
          <Heading327 className={classes.headingnormal}>email warm-up.</Heading327>
          <p className={classes.headingparah}>
            Cold emailing campaigns for sales or marketing purposes without a
            warm-up period can jeopardise your sender reputation and
            deliverability.
          </p>
          <p className={classes.step}>And all of your emails could be classified as <span>harmful.</span></p>
          <p className={classes.step}>Your domain could be <span>blacklisted</span></p>
          <p className={classes.step}>
            Many of your emails are being classified as <span>spam by email providers.</span>
          </p>
        </div>
      </Card>
      <Card className={classes.con}>
      <div className={classes.details}>
        <Heading327 className={classes.headingblue}>Without </Heading327>
        <Heading327 className={classes.headingnormal}>email warm-up.</Heading327>
        <p className={classes.headingparah}>
          Cold emailing campaigns for sales or marketing purposes without a
          warm-up period can jeopardise your sender reputation and
          deliverability.
        </p>
        <p className={classes.stepb}>And all of your emails could be classified as <span>harmful.</span></p>
        <p className={classes.stepb}>Your domain could be <span>blacklisted</span></p>
        <p className={classes.stepb}>
          Many of your emails are being classified as <span>spam by email providers.</span>
        </p>
      </div>
        <div>
          <img
            src="https://getwinbox.online/static/assets/image/bannerwin.gif"
            alt="banner"
            className={classes.gif}
          />
        </div>
      </Card>
    </div>
  );
};

export default Significance;
