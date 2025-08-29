import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import classes from "../assets/styles/Book.module.css";

const ThankYou = () => {
  return (
    <section
      className={`d-flex justify-content-center align-items-center vh-100 bg-dark ${classes.book_section}`}
    >
      <div
        className="text-center shadow-lg p-5 rounded bg-dark"
        style={{ maxWidth: "500px" }}
      >
        <FaCheckCircle size={60} color="green" className="mb-3" />
        <h2 className="mb-3">Thank You!</h2>
        <p className="mb-4">
          Your booking has been successfully submitted. We’ll get back to you
          shortly via email or phone.
        </p>
        <Link to="/" className="btn btn-secondary">
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default ThankYou;
