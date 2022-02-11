import React from "react";
import Hero from "../Hero/Hero";
import Table from "../Table/Table";
import Details from "../Details/Details";
import Header from "../Header/Header";

const MainBar = (props) => {
  return (
    <>
      <>
        <Header />
        <Hero />
        <Table />
        <Details />
      </>
    </>
  );
};

export default MainBar;
