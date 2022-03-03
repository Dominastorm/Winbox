import classes from "./Login.module.css";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Significance from "./Significance/Significance";
import Working from "./Working/Working";
import Carousel from "./Carousel/Carousel";
import Why from "./Why/Why";

const Report = (props) => {
  return (
    <div className={classes.container}>
    <Hero/>
    <Carousel/>
    <Significance/>
    <Working/>
    <Why/>
    </div>
  );
};

export default Report;
