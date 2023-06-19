// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper.min.css";
// import "swiper/swiper.scss"; // core Swiper
import "./carousel.css";
import "swiper/css/autoplay";


const CurvedCarousel = () => {
  return (
    <Swiper
      spaceBetween={25}
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
              <p className="carousel-image-head">Event Name</p>
              <p className="carousel-image-text"> 24 April 2023</p>
              <p className="carousel-image-text"> WTT Sector 16</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CurvedCarousel;
