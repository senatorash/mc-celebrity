import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import AppRoutes from "./AppRoutes";
import Footer from "./Footer";
import BackToTop from "../components/UI/BackToTop";
import Loader from "../components/UI/Loader";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });
  if (isLoading) return <Loader />;
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <AppRoutes />
      </main>
      <footer>
        <Footer />
      </footer>
      <BackToTop />
    </>
  );
};
export default Layout;
