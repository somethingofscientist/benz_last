// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper.min.css";
// import "swiper/swiper.scss"; // core Swiper
import "./carousel.css";
import "swiper/css/autoplay";
import { useTranslation } from "react-i18next";

import img1 from '../../images/events_clients/IMG_6494.jpg'
import img2 from '../../images/events_clients/PHOTO-2023-09-18-14-16-34 2.jpg'
import img3 from '../../images/events_clients/PHOTO-2023-09-18-14-16-34 3.jpg'
import img4 from '../../images/events_clients/PHOTO-2023-09-18-14-16-34 4.jpg'
import img5 from '../../images/events_clients/PHOTO-2023-09-18-14-16-34.jpg'

const CurvedCarousel = () => {
  const { t, i18n } = useTranslation();

  const imagesArr = [
    {
      img: img2,
      title: "China Event",
      text1: "",
      text2: "",
    },
    {
      img: img1,
      title: "China Plas",
      text1: "",
      text2: "",
    },
    {
      img: img4,
      title: "China Factory",
      text1: "",
      text2: "",
    },
    {
      img: img5,
      title: "Exhibition",
      text1: "",
      text2: "",
    },
    {
      img: img3,
      title: "China Factory",
      text1: "",
      text2: "",
    },
  ]

  return (
    <Swiper
      spaceBetween={25}
      autoplay
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {imagesArr.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="carousel-image-container">
            <img alt="" src={image.img} />
            <div className="carousel-image-data">
              <p className="carousel-image-head">{image.title}</p>
              <p className="carousel-image-text">{image.text1} </p>
              <p className="carousel-image-text">{image.text2} </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* {Array.from({ length: 20 }).map((res, index) => (
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
      ))} */}

    </Swiper>
  );
};

export default CurvedCarousel;
