import classes from "./Details.module.css";
import Block from "../../.../../../Elements/DivIHPb/DivIHPb";
import SpamrateIcon from "./Icons/SpamrateIcon";
import InteractionsIcon from "./Icons/InteractionsIcon";
import RepliedIcon from "./Icons/RepliedIcon";
import EmailsIcon from "./Icons/EmailsIcon";

const Details = () => {
  return (
    <div className={classes.flex}>
      <Block className={classes.margin} heading="2" parah="Emails sent"><EmailsIcon/></Block>
      <Block className={classes.margin} heading="2" parah="Interactions"><InteractionsIcon/></Block>
      <Block className={classes.margin} heading="2" parah="Replies"><RepliedIcon/></Block>
      <Block className={classes.nomargin} heading="2" parah="Spam Rate"><SpamrateIcon/></Block>
    </div>
  );
};

export default Details;
