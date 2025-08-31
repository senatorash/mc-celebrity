import { Link } from "react-router-dom";
import classes from "../../assets/styles/Footer.module.css";
import Animation from "../UI/Animation";

const Cta = () => {
  return (
    <Animation direction="ZoomIn">
      <div
        className="container-fluid text-light text-center"
        style={{
          backgroundColor: "#026dfd",
          margin: "100px 0 100px 0",
          padding: "90px 0",
        }}
      >
        <div className="container">
          <h4>Seasoned. Nimble. Always Ready.</h4>
          <p>
            I don't just speak. I connect, captivate, and create unforgettable
            moments. Let's make your event stand out.
          </p>

          <div className="m-5">
            <Link to="/book" className={`${classes.FooterButton}`}>
              Book Me{" "}
              <span>
                <i className="ri-arrow-right-line ms-2"></i>
              </span>
            </Link>
          </div>
        </div>
        <hr />
      </div>
    </Animation>
  );
};

export default Cta;
