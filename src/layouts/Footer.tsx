import Info from "../components/Home/Info";
import classes from "../assets/styles/Footer.module.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Info />
      <div
        className={`container-fluid text-black  ${classes.Footer}`}
        style={{ backgroundColor: "#026dfd" }}
      >
        {/* <div className="justify-content-center align-items-center"> */}
        <div className=" text-center text-light  ">
          <p className="m-0 p-4">
            &copy; {currentYear} MC Celebrity. All rights reserved.
          </p>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};
export default Footer;
