import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Book from "../pages/Book";

const AppRoutes = () => {
  // const location = useLocation();
  return (
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route path="/" element={<Home />} />
      <Route path="/book" element={<Book />} />
    </Routes>
  );
};

export default AppRoutes;
