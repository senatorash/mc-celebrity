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
            <Link to="" className={`${classes.FooterButton}`}>
              Book Me{" "}
              <span>
                <i className="ri-arrow-right-line ms-2"></i>
              </span>
            </Link>

            <Link to=""></Link>
          </div>
        </div>
        <hr />
      </div>
    </Animation>
  );
};

export default Cta;

// Seasoned. Nimble. Always Ready.

// Paragraph:
// Whether it’s a grand wedding, corporate gala, or a kid’s birthday party — I bring the perfect blend of professionalism and charm to every stage. As your Master of Ceremonies, I keep the crowd engaged, the energy high, and the event running smoothly.

// CTA Button:
// 👉 Book Me for Your Event
