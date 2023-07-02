// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper.min.css";
// import "swiper/swiper.scss"; // core Swiper
import "./carousel.css";
import "swiper/css/autoplay";
import { useTranslation } from "react-i18next";


const CurvedCarousel = () => {
  const { t, i18n } = useTranslation();

  return (
    <Swiper
      spaceBetween={25}
      autoplay
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {Array.from({ length: 20 }).map((res, index) => (
        <SwiperSlide>
          <div className="carousel-image-container">
            <img
              alt=""
              key={index}
              src={`https://picsum.photos/seed/picsum${index}/300`}
            />
            <div className="carousel-image-data">
              <p className="carousel-image-head">{t("Event Name")}</p>
              <p className="carousel-image-text">{t("24 April 2023")} </p>
              <p className="carousel-image-text"> {t("WTT Sector 16")} </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CurvedCarousel;
