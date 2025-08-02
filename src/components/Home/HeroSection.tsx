import { Link } from "react-router-dom";
import classes from "../../assets/styles/Hero.module.css";
import HeroTyping from "../UI/HeroTyping";
import { Element } from "react-scroll";

const HeroSection = () => {
  return (
    <Element name="home" id="home">
      <section className={`container-fluid ${classes.HeroContainer}`}>
        {/* <div className="row"> */}
        {/* <div className=""> */}
        <div className={classes.HeroContent}>
          <span className={classes.name}>MC CELEBRITY</span>
          <h1>
            Your Event, <span className={classes.hero_text}>My Stage</span>
          </h1>
          <p>Making Every Moment Memorable.</p>
          <div className={classes.HeroTyping}>
            <HeroTyping />
          </div>
          <div className={`${classes.HeroButtons} d-flex`}>
            <div className={classes.hero_btn1}>
              <Link to="/" style={{ padding: "12px 25px" }}>
                EMAIL
              </Link>
            </div>
            <div className={classes.hero_btn1}>
              <Link to="/">WHATSAPP</Link>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </section>
    </Element>
  );
};

export default HeroSection;
