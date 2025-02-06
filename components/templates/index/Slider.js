import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styles from "@/styles/slider.module.css";
export default function Slider() {
  return (
    <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
      <SwiperSlide>
        <div className="carousel-item active">
          <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <h2 className="text-primary font-weight-medium m-0">
              We Have Been Serving
            </h2>
            <h1 className="display-1 text-white m-0">COFFEE</h1>
            <h2 className="text-white m-0">* SINCE 1950 *</h2>
          </div>
        </div>
      </SwiperSlide>
   
      <SwiperSlide>
        <div className="carousel-item active">
          <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <h2 className="text-primary font-weight-medium m-0">
              We Have Been Serving-2
            </h2>
            <h1 className="display-1 text-white m-0">COFFEE</h1>
            <h2 className="text-white m-0">* SINCE 1950 *</h2>
          </div>
        </div>
      </SwiperSlide>
    
    </Swiper>
  );
}
