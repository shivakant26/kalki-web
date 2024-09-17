import PageBanner from "../components/common/banners/PageBanner";
import { TiTick } from "react-icons/ti";
import { PricingData } from "../utils/constant";
import PricingCard from "../components/common/PricingCard";
import { useNavigate } from "react-router-dom";
const Pricing = () => {
  const navigate = useNavigate();
  const choosePlan = (item) =>{
    navigate(`/pricing/${item.id}`,{state:{item}});
    
  }
  return (
    <>
      <PageBanner bannerTitle="Pricing" />
      <div className="pricing">
        <div className="center-wr">
          <div className="pricing-card-container">
            {
              PricingData.length > 0 ? (<>
              {
                PricingData.map((item,index)=>{
                  return(
                    <PricingCard key={index} item={item} choosePlan={()=>choosePlan(item)}/>
                  )
                })
              }
              </>) : (<>
              <p>Pricing Card Not Avaible OR Pending</p>
              </>)
            }
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Pricing;
