import React from "react";
import AboutImage from "../assets/images/work-togather.avif";
import PageBanner from "../components/common/PageBanner";
const About = () => {
  return (
    <>
      <PageBanner bannerTitle="About Us"/>
      <div className="who-we">
        <div className="center-wr">
          <div className="who-we-inner">
            <div className="who-content">
              <h2>Who We Are</h2>
              <p>
                <span className="special-text">kalki Group </span>is your all-in-one small business solution for
                accounting, bookkeeping, payroll, bill pay, and tax planning and
                preparation. We're so much more than just a bookkeeping service.
              </p>
              <div className="our-mission">
                <h5>Our mission is to:</h5>
                <ul>
                  <li>Honor God</li>
                  <li>Enhance the lives of small business owners</li>
                  <li>
                    Develop, educate, and inspire employees to reach their
                    greatest personal and professional potential
                  </li>
                  <li>
                    Make bookkeeping and accounting services attainable to all
                    people
                  </li>
                </ul>
                <p>
                  We're passionate about working with clients who understand the
                  concept of spending money to make money. Our high-level tax
                  and accounting services are designed to save you thousands in
                  the long run. Year-over-year, this will increase your profit
                  margin as your business grows.
                </p>
                <p>
                  If you're interested in any combination of the following
                  services, contact our expert team today so we can help you
                  find a solution that is perfect for you
                </p>
                <ul>
                  <li>Online Bookkeeping</li>
                  <li>Streamlined Bill Pay</li>
                  <li>Full-Service Payroll</li>
                  <li>Financial Statement Preparation</li>
                  <li>Tax Preparation and Advising</li>
                  <li>Business Advising</li>
                  <li>Financial Planning</li>
                  <li>Audit Assistance</li>
                  <li>Budget Preparation</li>
                  <li>And Much, Much More</li>
                </ul>
                <p>
                  When you become a <span className="special-text">Kalki Group </span>client, you will have access
                  to a dedicated team that will look after your business
                  interests as if they were their own. Costs are modest and
                  always agreed to in advance, so there are never any surprise
                  fees. See what package best fits your needs.
                </p>
              </div>
            </div>
            <div className="who-image">
                <img src={AboutImage} alt="about-img"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
