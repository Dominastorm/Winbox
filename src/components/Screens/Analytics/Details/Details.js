import classes from "./Details.module.css";

import Block from "../../.../../../Elements/DivIHPb/DivIHPb";
import SpamrateIcon from "./Icons/SpamrateIcon";
import InteractionsIcon from "./Icons/InteractionsIcon";
import RepliedIcon from "./Icons/RepliedIcon";
import EmailsIcon from "./Icons/EmailsIcon";

const Details = (props) => {
  return (
    <div className={classes.flex}>
    <Block className={classes.margin} heading={props.data.sent} parah="Emails sent"><EmailsIcon/></Block>
    <Block className={classes.margin} heading={props.data.interaction} parah="Interactions"><InteractionsIcon/></Block>
    <Block className={classes.margin} heading={props.data.replies} parah="Replies"><RepliedIcon/></Block>
    <Block className={classes.nomargin} heading={props.data.spam} parah="Spam Rate"><SpamrateIcon/></Block>
    </div>
  );
};

export default Details;
