import React from "react";
// import styles from './News.module.css';
import Sticky_header_industry from "../../components/news_compo/sticky_header/Sticky_header_industry";
import Heading from "../../components/news_compo/des_heading/Heading";
import NewsLetter from "../../components/news_compo/news_letter/NewsLetter";
// import Testimonials from "../../components/about_compo/testimonials/Testimonials";
import Award from "../../components/news_compo/awards/Award";
import Events from "../../components/news_compo/events/Events";
import CurvedCarousel from "../../components/news_compo/carousel/curved_carousel";

const News = () => {
  return (
    <>
      <Heading />
      <Sticky_header_industry />
      <Events />
      <Award />
      <NewsLetter />
    </>
  );
};

export default News;
