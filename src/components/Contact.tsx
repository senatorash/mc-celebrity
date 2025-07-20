import { Link } from "react-router-dom";
import classes from "../assets/styles/Contact.module.css";
const Contact = () => {
  return (
    <section className="container mt-5 mb-5 text-black">
      <div className="row g-3">
        <div className="col-lg-6">
          <div className={classes.ContactContent}>
            <h3>Let's Discuss your Project </h3>
            <p>
              Whether you have a question, want to book an event, or just want
              to say hello, feel free to reach out. I'm here to help make your
              event unforgettable!
            </p>
          </div>

          <>
            <div
              className={`${classes.ContactInfo} d-flex mb-3 align-items-center`}
            >
              <i className="ri-map-pin-line me-3"></i>
              <div>
                <p className="mb-1">Address:</p>
                <h6>Lagos, Nigeria</h6>
              </div>
            </div>
            <div
              className={`${classes.ContactInfo} d-flex mb-3 align-items-center`}
            >
              <i className="ri-mail-line me-3"></i>
              <div className="">
                <p className="mb-1">Email:</p>
                <h6>Lhjsjhd@gmail.com</h6>
              </div>
            </div>
            <div
              className={`${classes.ContactInfo} d-flex mb-3 align-items-center`}
            >
              <i className="ri-phone-line me-3"></i>
              <div>
                <p className="mb-1">Call:</p>
                <h6>+234-90-74874-093</h6>
              </div>
            </div>
          </>
          <div className=" mb-5">
            <div className="">
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
          </div>
        </div>
        <div className={`col-lg-6 ${classes.ContactForm}`}>
          <p>
            There are many variations of passages of Lorem Ipsu availabel, but
            the majority have suffered alte
          </p>
          <form>
            <div className="form-group ">
              <input
                placeholder="Name"
                type="text"
                className="form-control mb-3"
              />
            </div>
            <div className="form-group ">
              <input
                type="email"
                placeholder="Email"
                className="form-control mb-3"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Location"
                className="form-control mb-3"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Type of Event"
                className="form-control mb-3"
              />
            </div>
            <div className="form-group">
              <textarea
                rows={5}
                className="form-control mb-3"
                placeholder="Message"
              >
                {" "}
              </textarea>
            </div>
            <div>
              <input type="submit" className="form-control mb-3" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
