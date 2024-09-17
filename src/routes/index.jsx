import React, { Suspense } from "react";
import RootLayout from "../components/layout";
import { Routes, Route } from "react-router-dom";
import Loading from "../components/Loading";
import SinglePrice from "../pages/SinglePrice";

const HomePage = React.lazy(() => import("../pages/Home"));
const ContactUs = React.lazy(() => import("../pages/contactus/Contactus"));
const PageNotFound = React.lazy(() => import("../pages/NotFound"));
const About = React.lazy(() => import("../pages/About"));
const BookKeeping = React.lazy(() =>
  import("../components/services/BookKeeping")
);
const BillPay = React.lazy(() => import("../components/services/BillPay"));
const Tax = React.lazy(() => import("../components/services/Tax"));
const DataMaigration = React.lazy(() =>
  import("../components/services/DataMaigration")
);
const Payroll = React.lazy(() => import("../components/services/Payroll"));
const Pricing = React.lazy(() => import("../pages/Pricing"));
const Carear = React.lazy(() => import("../pages/Career"));
const PrivacyPolicy = React.lazy(() =>
  import("../components/PrivacyandPolicy")
);

const MainRouter = () => {
  return (
    <Suspense fallback={<div><Loading /></div>}>
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
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/pricing/:id" element={<SinglePrice />} />
          <Route path="/career" element={<Carear />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
