import classes from "./Invoices.module.css"
import Details from "./Details/Details";
import Row from "./Row/Row";
import InvoicePopup from "./Popup/InvoicePopup"

const data = [
  {
    date: "January , 2022",
    amount: "0$",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    status: "Completed",
    complete: "true",
  },
  {
    date: "January , 2022",
    amount: "0$",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    status: "Completed",
    complete: "true",
  },
];

const table = data.map((rowdetail) => (
  <Row
    date={rowdetail.date}
    amount={rowdetail.amount}
    details={rowdetail.details}
    status={rowdetail.status}
    complete={rowdetail.complete}
  />
));

const Invoices = () => {
  return (
    <>
    <InvoicePopup/>
      <Details />
      <ul className={classes.table}>{table}</ul>
    </>
  );
};

export default Invoices;
