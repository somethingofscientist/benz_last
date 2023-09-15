import React, { useEffect } from "react";
import Footer from "../../components/home_compo/footer/Footer";
import FAQ from "../../components/home_compo/faq/FAQ";
import Map from "../../components/home_compo/map/Map";
import Industries from "../../components/home_compo/industries/Industries";
import Why from "../../components/home_compo/why_to_choose_us/Why";
import Global from "../../components/home_compo/global_reach/Global";
import News from "../../components/home_compo/news_blog/News";
import OurMission from "../../components/home_compo/our_mission/OurMission";
import Products from "../../components/home_compo/products_marquee/Products";
import Navbar from "../../components/home_compo/navbar/Navbar";
import Contact from "../../components/home_compo/contact_us_button/Contact";
import styles from "./Homepage.module.css";
import homepageVideo from "../../components/videos/home2.mp4";
import Company_Marquee from "../../components/home_compo/company_marquee/Company_Marquee";

const Homepage = () => {
  // useEffect(() => {
  //   const videoElement = document.getElementById("video")
  //   if (videoElement) {
  //     videoElement.setAttribute("autoplay", "autoplay")
  //   }
  // }, [])
  return (
    <>
      <div className={styles.homepage}>
        <div className={styles.imageContainer}>
          <video
            // id="video"
            autoPlay
            loop muted
            src={homepageVideo}></video>
        </div>
        <Global />
        <Why />
        <Products />
        <OurMission />
        <Industries />
        <News />
        <Company_Marquee />
        <Map />
        <FAQ />
      </div>
    </>
  );
};

export default Homepage;
