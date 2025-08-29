import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import classes from "../../assets/styles/About.module.css";
import AboutImg from "../../assets/images/IMG_3287.jpg";
import Animation from "../UI/Animation";
const About = () => {
  return (
    // <Testing>
    <Element name="about" id="about">
      <section id="about" style={{ overflow: "hidden" }}>
        <div className={`container-fluid ${classes.AboutContainer}`}>
          <div className="row g-5">
            <div className="col-lg-6 p-0">
              <Animation direction="bottom">
                <div className={classes.AboutImageWrapper}>
                  <img src={AboutImg} alt="" loading="lazy" />
                </div>
              </Animation>
            </div>

            <div className="col-lg-6">
              <Animation direction="bottom">
                <div className={classes.AboutContent}>
                  <h4 className="mt-5 mb-5" style={{ fontSize: "20px" }}>
                    Learn About Me
                  </h4>
                  <p>
                    Nomayo Michael Oladipupo, popularly known as{" "}
                    <strong>MC Celebrity</strong>, is widely recognized as one
                    of the <strong>Best Emcees in Nigeria</strong> — a seasoned
                    Master of Ceremonies, Compere, Presenter, and Public
                    Speaker.
                  </p>

                  <p>
                    Holding both Bachelor's and Master's degrees in Sociology
                    from the University of Lagos, he blends intellect with
                    entertainment, creating unforgettable moments for audiences
                    across Nigeria.
                  </p>

                  <p>
                    He hosts a weekly teens’ program on Eko 89.7 FM, delivering
                    content that educates, entertains, and inspires listeners
                    nationwide.
                  </p>

                  <p>
                    MC Celebrity officially launched his professional career in
                    2016, though his mic journey began in 2010. Since then, he
                    has hosted high-profile weddings, corporate AGMs, seminars,
                    faith-based gatherings, kiddies’ parties, and more — earning
                    a reputation as the{" "}
                    <strong>Best Master of Ceremony in Nigeria</strong>.
                  </p>

                  <p>
                    Known for his commanding stage presence, articulate
                    delivery, and unmatched event energy, MC Celebrity
                    transforms ordinary events into lifelong memories.
                  </p>

                  <p>
                    <em>“Perhaps that’s why they call me MC Celebrity.”</em>
                  </p>

                  <Animation direction="right">
                    <div className={`${classes.btnWrapper} mt-5 mb-5`}>
                      <Link to="/book" className={classes.AboutButtons}>
                        Book
                      </Link>
                    </div>
                  </Animation>
                </div>
              </Animation>
            </div>
          </div>
        </div>
      </section>
    </Element>
    // </Testing>
  );
};
export default About;
