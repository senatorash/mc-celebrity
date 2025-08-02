import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import classes from "../../assets/styles/Contact.module.css";
import Animation from "../UI/Animation";

const Contact = () => {
  return (
    <Element name="contact" id="contact">
      <section className="container text-black" style={{ marginTop: "100px" }}>
        <Animation direction="fadeInUp">
          <div className={`${classes.Contact_text} text-center mb-5`}>
            <h4>Get In Touch</h4>
            <h2>Let's Discuss Your Project</h2>
          </div>
        </Animation>

        <div className="row g-3">
          <div className="col-lg-6">
            <Animation direction="left">
              <div className={`${classes.ContactContent}  mb-5`}>
                <p>
                  Whether you have a question, want to book an event, or just
                  want to say hello, feel free to reach out. I'm here to help
                  make your event unforgettable!
                </p>
              </div>

              <>
                <div
                  className={`${classes.ContactInfo} d-flex mb-3 align-items-center  w-75`}
                >
                  <i className="ri-map-pin-line me-3"></i>
                  <div>
                    <p className="mb-1">Address:</p>
                    <h6>Lagos, Nigeria</h6>
                  </div>
                </div>
                <div
                  className={`${classes.ContactInfo} d-flex mb-3 align-items-center  w-75`}
                >
                  <i className="ri-mail-line me-3"></i>
                  <div className="">
                    <p className="mb-1">Email:</p>
                    <h6>Lhjsjhd@gmail.com</h6>
                  </div>
                </div>
                <div
                  className={`${classes.ContactInfo} d-flex mb-3 align-items-center  w-75`}
                >
                  <i className="ri-phone-line me-3"></i>
                  <div>
                    <p className="mb-1">Call:</p>
                    <h6>+234-90-74874-093</h6>
                  </div>
                </div>
              </>
              {/* <div> */}
              <div className="mb-3 text-sm-start text-md-start text-lg-start ">
                <Link to="#" className={`${classes.SocialLink}`}>
                  <i className="ri-facebook-fill"></i>
                </Link>

                <Link to="#" className={`${classes.SocialLink}`}>
                  <i className="ri-instagram-line"></i>
                </Link>

                <Link to="#" className={`${classes.SocialLink}`}>
                  <i className="ri-twitter-x-line"></i>
                </Link>

                <Link to="#" className={`${classes.SocialLink}`}>
                  <i className="ri-youtube-line"></i>
                </Link>

                <Link to="#" className={`${classes.SocialLink}`}>
                  <i className="ri-tiktok-line"></i>
                </Link>
              </div>
            </Animation>
            {/* </div> */}
          </div>
          <div className={`col-lg-6 ${classes.ContactForm}`}>
            <Animation direction="right">
              <p>
                There are many variations of passages of Lorem Ipsu availabel,
                but the majority have suffered alte
              </p>
              <form>
                <div className={`${classes.input_field} form-group mb-3`}>
                  <input
                    placeholder="Name"
                    type="text"
                    className="form-control "
                  />
                </div>
                <div className={`${classes.input_field} form-group mb-3`}>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control mb-3"
                  />
                </div>
                <div className={`${classes.input_field} form-group mb-3`}>
                  <input
                    type="text"
                    placeholder="Location"
                    className="form-control mb-3"
                  />
                </div>
                <div className={`${classes.input_field} form-group mb-3`}>
                  <input
                    type="text"
                    placeholder="Type of Event"
                    className="form-control mb-3"
                  />
                </div>
                <div className={`${classes.input_field} form-group mb-3`}>
                  <textarea
                    rows={3}
                    className="form-control mb-3"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div>
                  <input
                    type="submit"
                    className={`${classes.ContactButton} form-control mb-3`}
                  />
                </div>
              </form>
            </Animation>
          </div>
        </div>
      </section>
    </Element>
  );
};
export default Contact;
