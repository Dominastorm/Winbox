import Sidebar from "../../Elements/SideBar/SideBar";
import Graph from "./Graph/Graph";
import Details from "./Details/Details";
import Table from "./Table/Table";
import Header from "../../Elements/Headerahb/Header";
import CustomSchedule from "./PopUp/CustomSchedule/CustomSchedule";

const Analytics = (props) => {
  return (
    <>
      <Header parah="useremail@gmail.com" to="/inbox/dashboard" />
      <Details />
      <Graph />
      <Table />
    </>
  );
};

export default Analytics;
