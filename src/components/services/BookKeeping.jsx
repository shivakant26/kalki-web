import React from "react";
import PageBanner from "../common/banners/PageBanner";
const BookKeeping = () => {
  return (
    <>
      <PageBanner bannerTitle="BookKeeping" />
      <div className="book-keeping">
          <h3 className="mb-20">With us, it's personal </h3>
          <p className="mb-20 text-light">
            Your dedicated team of bookkeepers and accountants will provide
            high-quality, meticulous bookkeeping services for far less than the
            cost of hiring an in-house professional. We care about your business
            and will be there for you every step of the way.
          </p>
          <h3 className="mb-20">
            Running your business is a full-time job, bookkeeping is ours.
          </h3>
          <p className="mb-20 text-light">
            Running your business is a full-time job, bookkeeping is ours.
            Better books. Better decisions. Bigger profits. We take the least
            enjoyable part of your business and keep your books clean, accurate
            and useful.
          </p>
          <h3 className="mb-20">Accrual or cash</h3>
          <p className="mb-20 text-light">
            We will guide you through the best accounting method for your
            business and keep your books accordingly.{" "}
          </p>
          <h3 className="mb-20">Bill pay and invoicing</h3>
          <p className="mb-20 text-light">
            Our flexible, streamlined, and intelligent bill pay system gives you
            back hours of your time and seamlessly manages your cash flow.
          </p>
          <h3 className="mb-20">Tax planning and preparation</h3>
          <p className="mb-20 text-light">
            Our team of CPAs and EAs prepare, review and file your tax returns
            to keep you compliant. Strategize and plan with us to help you save
            the most money.
          </p>
          <h3 className="mb-20">Reporting and advice</h3>
          <p className="mb-20 text-light">
            We work with you to enhance your understanding of your financial
            position and use key performance indicators so you have useful
            insights to guide your decisions.
          </p>
      </div>
    </>
  );
};

export default BookKeeping;
