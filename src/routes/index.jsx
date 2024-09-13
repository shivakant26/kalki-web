import RootLayout from "../components/layout";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import ContactUs from "../pages/contactus/Contactus";
import PageNotFound from "../pages/NotFound";
import About from "../pages/About";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="" element={<RootLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
