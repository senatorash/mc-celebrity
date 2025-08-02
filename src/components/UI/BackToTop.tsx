import { Element } from "react-scroll";
import classes from "../../assets/styles/BackToTop.module.css";
const BackToTop = () => {
  return (
    <Element name="back-to-top" className="back-to-top">
      <button
        className={classes.back_to_top}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="ri-arrow-up-s-line"></i>
      </button>
    </Element>
  );
};

export default BackToTop;
