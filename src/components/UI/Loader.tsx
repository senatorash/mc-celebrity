import classes from "../../assets/styles/Loader.module.css";
import img from "../../assets/images/logo.png";

const Loader = () => {
  return (
    <div className={classes.loader_container}>
      <img
        src={img}
        alt="Logo Loader"
        className={classes.loader_logo}
        style={{ backgroundColor: "#000", borderRadius: "50%" }}
      />
    </div>
  );
};

export default Loader;
