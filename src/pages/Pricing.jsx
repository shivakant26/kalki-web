import PageBanner from "../components/common/banners/PageBanner";
import { TiTick } from "react-icons/ti";
const Pricing = () => {
  return (
    <>
      <PageBanner bannerTitle="Pricing" />
      <div className="pricing">
        <div className="center-wr">
          <div className="pricing-card-container">
            <div className="pricing-card">
              <div className="card-heading">
                <h2>Tax</h2>
                <p>
                  Start at<span className="lg-ft">$350</span>
                </p>
              </div>
              <ul>
                <li>
                    <span><TiTick/></span>Preparation of Federal and State tax returns</li>
                <li> <span><TiTick/></span>Tax Planning/Strategizing</li>
                <li><span><TiTick/></span>Preparation of business property tax return</li>
              <button>Learn More</button>
              </ul>
            </div>
            <div className="pricing-card">
              <div className="card-heading">
                <h2>Bookkeeping</h2>
                <p>
                    
                  Start at<span className="lg-ft">$421</span>/monthly
                </p>
              </div>
              <ul>
                <li><span><TiTick/></span>Bank, Credit Card, and Loan Reconciliations</li>
                <li><span><TiTick/></span>Monthly Financial Statements</li>
                <li><span><TiTick/></span>Dedicated Bookkeeper and Account Manager</li>
              <button>Learn More</button>

              </ul>
            </div>
            <div className="pricing-card">
              <div className="card-heading">
                <h2>Payroll</h2>
                <p>
                  Start at<span className="lg-ft">$180</span>/mon.
                </p>
              </div>
              <ul>
                <li><span><TiTick/></span>Direct Deposit</li>
                <li><span><TiTick/></span>Federal and State Payroll Taxes</li>
                <li><span><TiTick/></span>Employee Portal</li>
              <button>Learn More</button>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
