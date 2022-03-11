import classes from "./Why.module.css";
import { Heading447, Heading326 } from "../../../UI/Heading/Heading";
import MessageIcon from "./Icons/MessageIcon";
import MultipleIcon from "./Icons/MultipleIcon";
import PieChartIcon from "./Icons/PieChartIcon";
import SettingsIcon from "./Icons/SettingsIcon";
import Card from "./Card";
import Cont from "../../../UI/Card/Card";
import Row from "./TickRow/Row";

const Why = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <Heading447 className={classes.headingTop}>Why Winbox?</Heading447>
        <Heading447 className={classes.heading}>
          The efficient solution to warming up
          <br /> your inbox
        </Heading447>
      </div>
      <div className={classes.flex}>
        <Card heading="Add multiple inbox">
          <MessageIcon />
        </Card>
        <Card heading="Plug & play setup">
          <SettingsIcon />
        </Card>
        <Card heading="Multiple warm-up options">
          <MultipleIcon />
        </Card>
        <Card heading="Dashboard & monitoring" className={classes.lastCard}>
          <PieChartIcon />
        </Card>
      </div>
      <Cont className={classes.block}>
        <div className={classes.flexcol}>
          <Heading326 className={classes.head}>Email warm-up</Heading326>
          <Row className={classes.row} content="Automated interactions"/>
          <Row className={classes.row} content="Auto-Remove from Spam"/>
          <Row className={classes.row} content="Human realistic emails (GPT-3)"/>
          <Row className={classes.row} content="Spam score monitoring"/>
        </div>
        <div className={classes.flexcol}>
          <Heading326 className={classes.head}>Inbox integrations</Heading326>
          <Row className={classes.row} content="Gmail - Gsuite inbox (OAuth)"/>
          <Row className={classes.row} content="Outlook - Microsoft 365"/>
          <Row className={classes.row} content="Yahoo Inbox"/>
          <Row className={classes.row} content="Any other Inbox (SMTP)"/>
        </div>
        <div className={classes.flexcol}>
          <Heading326 className={classes.head}>Account & services</Heading326>
          <Row className={classes.row} content="Team members"/>
          <Row className={classes.row} content="Live chat support"/>
          <Row className={classes.row} content="In-app Onboarding"/>
          <Row className={classes.row} content="Blog resources"/>
        </div>
      </Cont>
    </div>
  );
};

export default Why;
