import Sidebar from "../../Elements/SideBar/SideBar";
import Graph from "./Graph/Graph";
import Details from "./Details/Details";
import Table from "./Table/Table";
import Header from "../../Elements/Headerahb/Header";
import CustomSchedule from "./PopUp/CustomSchedule/CustomSchedule";

const Analytics = () => {
  console.log(1);
  return (
    <>
      <Header parah="useremail@gmail.com" buttontext="Add new inbox" />
      <Details />
      <Graph />
      <Table />
    </>
  );
};

export default Analytics;
