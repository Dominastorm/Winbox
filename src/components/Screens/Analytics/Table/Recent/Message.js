import classes from "./Message.module.css";
import MessageIcon from "./MessageIcon";

const Message = (props) => {
  return (
    <div className={classes.background}>
      <div>
        <MessageIcon />
      </div>
      <div>
        <h1 className={classes.heading}>Message Sent</h1>
        <p className={classes.parah}>{props.children}</p>
      </div>
    </div>
  );
};

export default Message;
