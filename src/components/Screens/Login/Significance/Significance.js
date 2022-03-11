import classes from "./Significance.module.css";
import { Heading447, Heading327 } from "../../../UI/Heading/Heading";
import CautionIcon from "./Icons/CautionIcon";
import DollarIcon from "./Icons/DolarIcon";
import ImproveIcon from "./Icons/ImproveIcon";
import MessageIcon from "./Icons/MessageIcon";
import RestrictedIcon from "./Icons/RestrictedIcon";
import TrashIcon from "./Icons/TrashIcon";

const Significance = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.cont}>
        <Heading447 className={classes.heading}>
          What is the significance of email <br />
          warm-up
        </Heading447>
        <p className={classes.headingparah}>
          51% of emails sent end up in spam folders What about your emails?
        </p>
      </div>
      <div className={classes.con}>
        <div>
          <img
            src="https://getwinbox.online/static/assets/image/bannerwin.gif"
            alt="banner"
            className={classes.gif}
          />
        </div>
        <div className={classes.details}>
          <Heading327 className={classes.headingred}>Without </Heading327>
          <Heading327 className={classes.headingnormal}>
            email warm-up.
          </Heading327>
          <p className={classes.headingparah}>
            Cold emailing campaigns for sales or marketing purposes without a
            warm-up period can jeopardise your sender reputation and
            deliverability.
          </p>
          <p className={classes.step}>
            <CautionIcon /> And all of your emails could be classified as{" "}
            <span>harmful.</span>
          </p>
          <p className={classes.step}>
            <RestrictedIcon /> Your domain could be <span>blacklisted</span>
          </p>
          <p className={classes.step}>
            <TrashIcon /> Many of your emails are being classified as{" "}
            <span>spam by email providers.</span>
          </p>
        </div>
      </div>
      <div className={classes.con}>
        <div className={classes.details}>
          <Heading327 className={classes.headingblue}>Thanks </Heading327>
          <Heading327 className={classes.headingnormal}>
            to email warm-up.
          </Heading327>
          <p className={classes.headingparah}>
            Send out cold email campaigns that don't get filtered into spam
            folders. Allow your emails to reach inboxes, resulting in more leads
            and sales!
          </p>
          <p className={classes.stepb}>
            <MessageIcon /> Your emails have been{" "}
            <span>sent and received.</span>
          </p>
          <p className={classes.stepb}>
            <ImproveIcon /> Improve your{" "}
            <span>reputation and deliverability.</span>
          </p>
          <p className={classes.stepb}>
            <DollarIcon /> Increase the number of deals you close by{" "}
            <span>reaching out to your leads.</span>
          </p>
        </div>
        <div>
          <img
            src="https://getwinbox.online/static/assets/image/bannerwin.gif"
            alt="banner"
            className={classes.gif}
          />
        </div>
      </div>
    </div>
  );
};

export default Significance;
