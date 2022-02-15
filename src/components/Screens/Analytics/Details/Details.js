import classes from "./Details.module.css";
import Block from "./Block";
import SpamrateIcon from "./Icons/SpamrateIcon";
import InteractionsIcon from "./Icons/InteractionsIcon";
import RepliedIcon from "./Icons/RepliedIcon";
import EmailsIcon from "./Icons/EmailsIcon";

const Details = () => {
  return (
    <div className={classes.flex}>
      <Block amount="2" detail="Emails sent"><EmailsIcon/></Block>
      <Block amount="2" detail="Interactions"><InteractionsIcon/></Block>
      <Block amount="2" detail="Replies"><RepliedIcon/></Block>
      <Block amount="2" detail="Spam Rate"><SpamrateIcon/></Block>
    </div>
  );
};

export default Details;
