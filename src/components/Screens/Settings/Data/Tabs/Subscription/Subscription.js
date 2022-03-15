import classes from "./Subscription.module.css";
import Card from "../../../../../UI/Card/Card";
import BlockIHP from "../../../../../Elements/DivIHPb/DivIHPb";
import SubscriptionIcon from "./Icons/SubscriptionIcon";
import CreditCardIcon from "./Icons/CreditCardIcon";
import DocumentIcon from "./Icons/DocumentIcon";
import GreenTickIcon from "./Icons/GreenTickIcon";
import TimerIcon from "./Icons/TimerIcon";
import SubscriptionCard from "./SubscriptionCard";

const Subscription = (props) => {
  const Subscribed = 1;

  return (
    <>
      {Subscribed ? (
        <div className={classes.flex}>
          <BlockIHP
            className={classes.blockwm}
            heading="Monthly 200"
            parah="Name"
          >
            <DocumentIcon />
          </BlockIHP>
          <BlockIHP
            className={classes.blockwm}
            heading="March 1, 2022"
            parah="Next Bill Date"
          >
            <CreditCardIcon />
          </BlockIHP>
          <BlockIHP className={classes.blockwm} heading="Active" parah="Status">
            <GreenTickIcon />
          </BlockIHP>
          <BlockIHP
            className={classes.block}
            heading="January 1, 2022"
            parah="Created At"
          >
            <TimerIcon />
          </BlockIHP>
        </div>
      ) : (
        <BlockIHP
          heading="Subscription Plans"
          parah="We have extremely transparent plans"
        >
          <SubscriptionIcon />
        </BlockIHP>
      )}
      <Card className={classes.flexcont}>
        <SubscriptionCard heading="Solo" amount="19" buttontext="choose">
          <ul className={classes.list}>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Egestas felis, ante magna nunc amet imperdiet.</li>
            <li>
              Consequat augue malesuada id sagittis pretium metus diam gravida.
            </li>
            <li>Tortor eget nunc fames cursus nibh quam.</li>
          </ul>
        </SubscriptionCard>
        <SubscriptionCard
          heading="Start-Up"
          amount="79"
          buttontext="choose"
          taken={Subscribed}
        >
          <ul className={classes.list}>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Egestas felis, ante magna nunc amet imperdiet.</li>
            <li>
              Consequat augue malesuada id sagittis pretium metus diam gravida.
            </li>
            <li>Tortor eget nunc fames cursus nibh quam.</li>
          </ul>
        </SubscriptionCard>
        <SubscriptionCard heading="Team" amount="299" buttontext="choose">
          <ul className={classes.list}>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Egestas felis, ante magna nunc amet imperdiet.</li>
            <li>
              Consequat augue malesuada id sagittis pretium metus diam gravida.
            </li>
            <li>Tortor eget nunc fames cursus nibh quam.</li>
          </ul>
        </SubscriptionCard>
      </Card>
    </>
  );
};

export default Subscription;
