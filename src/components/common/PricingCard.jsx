import React from "react";
import { TiTick } from "react-icons/ti";
const PricingCard = ({ item, identity, choosePlan }) => {
  console.log(item);
  return (
    <div className="pricing-card">
      <div className="card-heading">
        <h2>{item.labelName}</h2>
        <p>
          Start at
          <span className="lg-ft">${item.pricingStart || item.plan}</span>
          /monthly
        </p>
      </div>
      <ul>
        {item.facility &&
          item.facility.map((item, index) => {
            return (
              <li key={index}>
                <span>
                  <TiTick />
                </span>
                {item}
              </li>
            );
          })}
        {identity === "sip" && (
          <>
            <li className="d-flex sp-between">
              <span className="d-flex gap"><TiTick /> Monthly Transection : </span>
              {item.mt}
            </li>
            <li className="d-flex sp-between">
              <span className="d-flex gap"><TiTick /> Service Frequency : </span>
              {item.sf}
            </li>
            <li className="d-flex sp-between">
              <span className="d-flex gap"><TiTick /> Month End Accounting : </span>
              {item.mea}
            </li>
            <li className="d-flex sp-between">
              <span className="d-flex gap"><TiTick /> Bank/CC Reconciliation : </span>
              {item.bankCCR}
            </li>
            <li className="d-flex sp-between">
              <span className="d-flex gap"><TiTick /> Cash or Accural : </span>
              {item.coa}
            </li>
            <li className="d-flex sp-between">
              <span className="d-flex gap"><TiTick /> Transaction by Tracking Category : </span>
              {item.tbtc}
            </li>
          </>
        )}
        {identity === "sip" ? (
          <button className="plan-btn">Subscribe</button>
        ) : (
          <button className="plan-btn" onClick={choosePlan}>
            Choose Plan
          </button>
        )}
      </ul>
    </div>
  );
};

export default PricingCard;
