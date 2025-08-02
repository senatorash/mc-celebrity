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
                    Nomayo Michael Oladipupo, fondly known as MC Celebrity, is a
                    seasoned Master of Ceremonies, Compere, Presenter, and
                    Public Speaker.
                  </p>

                  <p>
                    Armed with both Bachelor's and Master's degrees in Sociology
                    from the University of Lagos, his professional journey
                    blends intellect with entertainment.
                  </p>

                  <p>
                    He hosts a weekly teens’ program on Eko 89.7 FM , reaching a
                    diverse audience with content that educates, entertains, and
                    informs.
                  </p>

                  <p>
                    MC Celebrity officially launched his emceeing career in
                    2016, but his journey on the mic began in 2010. Since then,
                    he’s graced numerous stages—from corporate AGMs and seminars
                    to weddings, faith-based events, and kiddies parties.
                  </p>

                  <p>
                    With a commanding mic presence, articulate delivery, and an
                    unmatched stage energy, he continues to bring life to events
                    and smiles to audiences.
                  </p>

                  <p>
                    <em>“Perhaps that’s why he’s called MC Celebrity.”</em>
                  </p>

                  <Animation direction="right">
                    <div className={`${classes.btnWrapper} mt-5 mb-5`}>
                      <Link to="" className={classes.AboutButtons}>
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
