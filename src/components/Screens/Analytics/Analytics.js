import Sidebar from "../../Elements/SideBar/SideBar";
import Graph from "./Graph/Graph";
import Details from "./Details/Details";
import Table from "./Table/Table";
import Header from "../../Elements/Headerahb/Header";
import CustomSchedule from "./PopUp/CustomSchedule/CustomSchedule";
import HeroHeader from "../../Elements/Header/Header";

const Analytics = (props) => {
  return (
    <>
      <HeroHeader />
      <Header parah="useremail@gmail.com" goBack={props.renderMainPage} />
      <Details />
      <Graph />
      <Table />
    </>
  );
};

export default Analytics;
