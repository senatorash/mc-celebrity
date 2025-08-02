import { Link } from "react-router-dom";
import classes from "../assets/styles/Error.module.css";
import notFound from "../assets/images/notFound.png";
const Error404 = () => {
  return (
    <header className={classes.ErrorContainer}>
      <div>
        <img src={notFound} alt="not_Found" width={400} />
        <h2>Page Not Found</h2>
        <p className="text-center">
          The page you are looking for does not exist.
        </p>
        <div>
          <Link to="/" className={classes.ErrorBtn}>
            Back Home
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Error404;
