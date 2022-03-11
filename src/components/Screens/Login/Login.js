import classes from "./Login.module.css";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Significance from "./Significance/Significance";
import Working from "./Working/Working";
import Carousel from "./Carousel/Carousel";
import Why from "./Why/Why";
import Steps from "./Steps/Steps"
import LoginPage from "./LoginPage/LoginPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import Footer from "./Footer/Footer";

const Report = (props) => {
  return (
    <div className={classes.container}>
      <Header/>
      <Hero />
      <Carousel />
      <Significance />
      <Working />
      <Steps/>
      <Why />
      <Footer/>
    </div>
  );
};

export default Report;
