import { Link } from "react-router-dom";
import img from "../../assets/images/logo.png";
import classes from "../../assets/styles/Footer.module.css";
import Animation from "../UI/Animation";
const Info = () => {
  return (
    <Animation direction="fadeInUp">
      <section
        style={{
          backgroundColor: "grey",
          padding: "45px 0 15px 0",
          overflow: "hidden",
        }}
      >
        <div className="container text-light">
          <div className="row g-5">
            <div className="col-md-6 col-lg-4 mb-2">
              <h4 className="">MC Celebrity</h4>
              <img
                src={img}
                alt="mc-celebrity-logo"
                loading="lazy"
                width={85}
                style={{ background: "black", borderRadius: "50%" }}
              />
              <p className="mt-2">
                Real Talk. Real People. Real Impact. <br />
                Honest conversations. Big stories. Life behind the mic all in
                one show.
              </p>
              <div className={``}>
                <Link
                  to="https://www.facebook.com/share/172Y5e3Mp3/?mibextid=wwXIfr"
                  className={`${classes.SocialLinks}`}
                >
                  <i className="ri-facebook-fill"></i>
                </Link>

                <Link
                  to="https://www.instagram.com/mccelebrity?igsh=MXRvcnNqajd4cXB1cg%3D%3D&utm_source=qr"
                  className={`${classes.Social_link12}`}
                >
                  <i className="ri-instagram-fill"></i>
                </Link>

                <Link
                  to="https://x.com/iammccelebrity?s=21&t=fi3v8gvXq-_k0j2587tyng"
                  className={`${classes.Social_link11}`}
                >
                  <i className="ri-twitter-x-fill"></i>
                </Link>

                <Link
                  to="https://www.tiktok.com/@mccelebrity23?_t=ZS-8yvEgKFXLWO&_r=1"
                  className={`${classes.Social_link11}`}
                >
                  <i className="ri-tiktok-line"></i>
                </Link>
                <Link to="#" className={`${classes.Social_link2}`}>
                  <i className="ri-youtube-fill"></i>
                </Link>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-2">
              <h4 className="mb-5">Newsletter</h4>
              <form>
                <div className={`${classes.input_field} form-group mb-3`}>
                  <input
                    type="text"
                    placeholder=" Your name"
                    className="form-control "
                  />
                </div>
                <div className={`${classes.input_field} form-group mb-3`}>
                  <input
                    type="email"
                    placeholder=" Your email"
                    className="form-control "
                  />
                </div>
                <button
                  type="submit"
                  className={`form-control ${classes.FooterBtn}`}
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className=" col-md-6 col-lg-4 mb-5">
              <h4 className="fw-bold text-white mb-2">Now Streaming On</h4>
              <p className="text-white small mb-2">
                Tune in anytime on your favorite platforms. Never miss a story
                that matters.
              </p>
              <div className="d-flex gap-3 text-red">
                <Link to="#" className={`${classes.Social_link1}`}>
                  <i className="ri-spotify-fill"></i>
                </Link>
                <Link to="#" className={`${classes.Social_link2}`}>
                  <i className="ri-youtube-fill"></i>
                </Link>
                <Link to="#" className={`${classes.Social_link3}`}>
                  <i className="ri-soundcloud-fill"></i>
                </Link>

                {/* <i className=""></i>
              <i className=""></i>
              <i className="4"></i> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Animation>
  );
};
export default Info;
