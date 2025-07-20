import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<h1>Page Not Found</h1>} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
