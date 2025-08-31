import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Book from "../pages/Book";
import ScrollToTop from "../components/UI/ScrollToTop";
const AppRoutes = () => {
  // const location = useLocation();
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </ScrollToTop>
    </>
  );
};

export default AppRoutes;
