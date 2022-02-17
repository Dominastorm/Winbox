import Sidebar from "../SideBar/SideBar";
import Graph from "./Graph/Graph";
import Details from "./Details/Details";
import Table from "./Table/Table";
import Header from "./Header/Header";
import PopUp from "./PopUp/CustomSchedule/CustomSchedule";
import classes from "./Analytics.module.css";

const Analytics = () => {
  return (
    <>
    <PopUp/>
      <div className={classes.container}>
        <div className={classes.sidebar}>
          <Sidebar />
        </div>
        <div className={classes.main}>
          <Header />
          <Details/>
          <Graph/>
          <Table/>
        </div>
      </div>
    </>
  );
};

export default Analytics;
