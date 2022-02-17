import classes from "./Table.module.css";
import Details from "./Details/Details";
import Header from "./Header/Header";
import Grid from "./Grid/Grid";
import Recent from "./Recent/Recent";

const Table = () => {
  return (
    <div className={classes.flex}>
      <div className={classes.table}>
        <Header />
        <Details />
        <Grid />
      </div>
      <Recent />
    </div>
  );
};

export default Table;
