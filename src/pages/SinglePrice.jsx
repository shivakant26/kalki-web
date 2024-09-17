import React from "react";
import SectionHeading from "../components/common/SectionHeading";
import { useLocation, useParams } from "react-router-dom";
import PricingCard from "../components/common/PricingCard";
const SinglePrice = () => {
  const params = useParams();
  const { state } = useLocation();
  const { popularPlans } = state.item;
  console.log(123, params, state);
  return (
    <>
      <div className="single-price">
        <div className="center-wr">
          <SectionHeading secTitle={`Choose a Plan for`} specialText={state.item.labelName} />
          <div className="pricing-card-container">
            {popularPlans?.length > 0 ? (
              <>
                {popularPlans?.map((item, index) => {
                  return <PricingCard item={item} identity="sip" key={index} />;
                })}
              </>
            ) : (
              <>
                <p>Currenty Not Avaible</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePrice;
