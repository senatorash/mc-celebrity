import NavBar from "./NavBar";
import HeroSection from "../components/HeroSection";
import AppRoutes from "./AppRoutes";
import Footer from "./Footer";
import classes from "../assets/styles/Layout.module.css";

const Layout = () => {
  return (
    <>
      <header className={classes.header}>
        <NavBar />
        <HeroSection />
      </header>

      <main>
        <AppRoutes />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default Layout;
