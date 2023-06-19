// import styles from "./About.module.css";
import React, { useEffect, useRef, useState } from "react";
import Marquee from "../../components/about_compo/MarqueeHistory/MarqueeHistory";
import Award from "../../components/about_compo/award/Award";
import Working from "../../components/about_compo/benefit/Working";
import Environment from "../../components/about_compo/environment/Environment";
import Heading from "../../components/about_compo/heading_header/Heading";
import Sticky_header from "../../components/about_compo/sticky_header/Sticky_header";
import Team from "../../components/about_compo/team/Team";
import Trusted_partner from "../../components/about_compo/trusted/Trusted_partner";

const About = () => {

  return (
    <>
      <Heading />
      <Sticky_header />
      <Trusted_partner />
      <Marquee />
      <Working />
      <Award />
      <Environment />
      <Team />
    </>
  );
};

export default About;
