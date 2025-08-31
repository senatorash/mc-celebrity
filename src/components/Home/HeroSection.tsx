import { Link } from "react-router-dom";
import classes from "../../assets/styles/Hero.module.css";
import HeroTyping from "../UI/HeroTyping";
import { Element } from "react-scroll";

const HeroSection = () => {
  return (
    <Element name="home" id="home">
      <section className={`container-fluid ${classes.HeroContainer}`}>
        <div className={classes.HeroContent}>
          <h1>
            Your Event, <span className={classes.hero_text}>My Stage</span>
          </h1>
          <h4>MC Celebrity | Best MC in Nigeria</h4>
          <div className={classes.HeroTyping}>
            <HeroTyping />
          </div>
          <div className={`${classes.HeroButtons} d-flex`}>
            <div className={classes.hero_btn1}>
              <Link
                to="https://formsubmit.co/el/xezife"
                style={{ padding: "12px 25px" }}
              >
                EMAIL
              </Link>
            </div>
            <div className={classes.hero_btn1}>
              <Link to="https://wa.me/2348022753314">WHATSAPP</Link>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default HeroSection;
