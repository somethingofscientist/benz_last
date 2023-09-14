import React, { useState } from 'react';
import styles from './Testimonial.module.css';
import yamaha from '../../images/yamaha.png';
// import volvo from '../../images/yamaha.png';
import tata from '../../images/tata.png';
import toyo from '../../images/toyo.png';
import suzu from '../../images/suzu.png';
import volvo from '../../images/volvo.png';
import renault from '../../images/renault.png';

import samsung from '../../images/company/samsung.png';
import mitbushi from '../../images/company/mitbushi.png';
import bosch from '../../images/company/bosch.png';
import siemens from '../../images/company/siemens.png';
import honda from '../../images/company/hnda.jpg';

import { useTranslation } from 'react-i18next';


const Testimonials = () => {
  const [hoverState, setHoverState] = useState({});

  const handleHover = (index) => {
    setHoverState((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };
  const { t, i18n } = useTranslation();

  const arr = [
    {
      logo: samsung,
      heading: "Flip Front 2",
      heading2: "Flip Back 2",
      para: "BENZ Packaging is simply outstanding! Their best-in-class packaging products ensure our goods reach customers in pristine condition every time. What sets them apart is their expert design team, which tailors solutions to perfection. They don't just supply materials; they're partners in sustainability. BENZ actively works to reduce excess packaging and minimize plastic and paper waste. They're the complete package when it comes to packaging solutions!"
    },
    {
      logo: mitbushi,
      heading: "Flip Front 2",
      heading2: "Flip Back 2",
      para: "We’ve been using BENZ Packaging’s products and their expertise for product packaging designs for our business' shipping needs, and I couldn't be happier. Their packaging solutions have saved us from countless shipping mishaps.Our products always arrive intact and in perfect condition, thanks to their high-quality materials and attention to detail. Plus, their team is a pleasure to work with, always responsive and accommodating. I highly recommend BENZ to anyone who values the safety of their shipments"
    },
    {
      logo: renault,
      heading: "Flip Front 2",
      heading2: "Flip Back 2",
      para: "Ever since we started using BENZ’s Protective Packaging, our products have been arriving safely and undamaged.Their packaging solutions are reliable, and it's been a stress-free experience."
    },
    {
      logo: bosch,
      heading: "Flip Front 2",
      heading2: "Flip Back 2",
      para: "We couldn't resist sharing our experience for Benz VCI bags, It’s nothing short of amazing! From the moment we started testing them, I noticed a significant improvement in quality, productivity, efficiency in packing our highly valuable parts with Benz VCI bags. What truly sets Benz VCI Bags apart is its user-friendly packaging, reliability, versatility. It's evident that your team has put immense thought and effort into crafting a product that exceeds expectations."
    },
    {
      logo: siemens,
      heading: "Flip Front 2",
      heading2: "Flip Back 2",
      para: "BENZ Packaging consistently delivers quality. Their Plywood boxes are strong, and their quality holds up well.Dependable packaging for our shipping needs."
    },
    {
      logo: honda,
      heading: "Flip Front 2",
      heading2: "Flip Back 2",
      para: "Ever since we started using BENZ’s Protective Packaging, our products have been arriving safely and undamaged. Their packaging solutions are reliable, and it's been a stress-free experience.BENZ Packaging consistently delivers quality. Their inner and outer packaging products are strong, and their quality holds up well. Dependable packaging for our shipping needs."
    },
  ];

  return (
    <>
      <a id='section4'>
        <div className={styles.test_container}>
          <div className={styles.test_heading}>{t("Testimonials")} </div>

          {/* video section */}
          <div className={styles.test_video_container}>
            {arr.map((item, index) => (
              <div
                key={index}
                className={`${styles.tile} ${hoverState[index] ? styles.flipped : ''}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(index)}
              >
                <div className={styles.front}>
                  <img src={item.logo} alt="" />
                </div>
                <div className={styles.back}>
                  {/* <h1>{item.heading2}</h1> */}
                  <p> {t(`${item.para}`)} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </a>
    </>
  );
}

export default Testimonials;
