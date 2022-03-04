import classes from "./Login.module.css";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Significance from "./Significance/Significance";
import Working from "./Working/Working";
import Carousel from "./Carousel/Carousel";
import Why from "./Why/Why";
import LoginPage from "./LoginPage/LoginPage";
import SignUpPage from "./SignUpPage/SignUpPage";

const Report = (props) => {
  return (
    <LoginPage/>
  );
};

export default Report;


<div className={classes.container}>
<Hero/>
<Carousel/>
<Significance/>
<Working/>
<Why/>
</div>
