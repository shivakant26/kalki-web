import RootLayout from "../components/layout";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import ContactUs from "../pages/contactus/Contactus";
import PageNotFound from "../pages/NotFound";
import About from "../pages/About";
import BookKeeping from "../components/services/BookKeeping";
import BillPay from "../components/services/BillPay";
import Tax from "../components/services/Tax";
import DataMaigration from "../components/services/DataMaigration";
import Payroll from "../components/services/Payroll";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="" element={<RootLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/service/payroll" element={<Payroll />} />
        <Route path="/service/book-keeping" element={<BookKeeping />} />
        <Route path="/service/bill-pay" element={<BillPay />} />
        <Route path="/service/tax" element={<Tax />} />
        <Route path="/service/data-maigration" element={<DataMaigration />} />
        <Route path="/*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
