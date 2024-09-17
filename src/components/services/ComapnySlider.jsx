import intBookImg from "../../assets/images/intbook1.png";
import xeroImg from "../../assets/images/xero.png";
import reckonImg from "../../assets/images/rackon1.png";
import myobImg from "../../assets/images/myob1.png";
import freshBookImg from "../../assets/images/freshbook1.png";
import zohoImg from "../../assets/images/zoho-logo.png";
import oddoImg from "../../assets/images/oddo1.png";
import netsuitsImg from "../../assets/images/netsuits1.png";
import jazImg from "../../assets/images/jaz1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
const CompanySlider = () => {
  return (
    <Swiper
      spaceBetween={2}
      slidesPerView={8}
      modules={[Autoplay]}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={1000}
      breakpoints={{
        980: {
          slidesPerView: 4,
        },
        650: {
          slidesPerView: 3,
        },
        480: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      }}
    >
      <SwiperSlide>
        <img src={intBookImg} alt="company-img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={xeroImg} alt="company-img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={reckonImg} alt="company-img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={myobImg} alt="company-img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={freshBookImg} alt="company-img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={zohoImg} alt="company-img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={oddoImg} alt="company-img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={netsuitsImg} alt="company-img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={jazImg} alt="company-img" />
      </SwiperSlide>
    </Swiper>
  );
};

export default CompanySlider;
