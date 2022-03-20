import classes from "./InvoicePopup.module.css";
import Modal from "../../../../../../UI/Modal/Modal";
import DelIcon from "../../../../../../Icons/DelIcon";
import Logo from "../../../../../../Icons/Logo";
import Heading, {
  Heading186,
  Heading326,
} from "../../../../../../UI/Heading/Heading";

const Row = (props) => {
  return (
    <div className={`${props.className}  ${classes.flexstart} `}>
      <p className={props.parahClass || classes.parah}>{props.parah}&nbsp;</p>
      <Heading>{props.heading}</Heading>
    </div>
  );
};

const Logout = (props) => {
  return (
    <Modal modalClass={classes.modalClass} onClick={props.hidePopUp}>
      <div className={classes.flexend}>
        <div>
          <DelIcon onClick={props.hidePopUp}/>
        </div>
      </div>
      <div className={classes.flexcentercolumn}>
        <Logo />
        <Row
         className={classes.margin}
          parah="Receipt "
          heading="E0FA7177-0001"
          parahClass={classes.parahreceipt}
        />
        <Heading326 className={classes.amount}>$ 0.00</Heading326>
        <div className={classes.container}>
          <Heading186 className={classes.heading}>Summary</Heading186>
          <div className={classes.border}></div>
          <Row parah="From" heading="useremail.gmail.com" />
          <Row parah="To" heading="Followify Inc." />
          <div className={classes.border}></div>
        </div>
        <div className={classes.container}>
          <Heading186 className={classes.heading}>Your Order</Heading186>
          <div className={classes.border}></div>
          <Row parah="Data" heading="Aug 30 - Sep 13, 2021" />
          <Row
            parah="Name"
            heading="Lorem ipsum dolor sit amet, consectetur "
          />
          <div className={classes.border}></div>
        </div>
        <div className={classes.container}>
          <Heading186 className={classes.heading}>Amount</Heading186>
          <div className={classes.border}></div>
          <Row parah="Sum" heading="$0.00" />
          <div className={classes.border}></div>
        </div>
      </div>
    </Modal>
  );
};

export default Logout;
